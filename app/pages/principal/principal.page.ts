import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  usuario: string = '';
  contrasena: string = '';

  correo: string = '';
  nombre: string = '';
  apellido: string = '';

  isSupported = false;
  barcodes: Barcode[] = [];

  constructor(private router: Router, private db: DbService,private alertController: AlertController, private api: ApiService) { }

  ngOnInit() {


    // let extras = this.router.getCurrentNavigation(); //OBTENER DATOS DE LA ANTERIOR PÁGINA

    // if(extras?.extras.state){
    //   this.usuario = extras?.extras.state['usuario'] //AQUI TIENEN QUE SER EL MISMO NOMBRE QUE SE LES DIO EN EL LOGIN.TS
    //   this.contrasena = extras?.extras.state['contrasena'];
    // }

    // console.log('LGP: SESIÓN: '+this.usuario);

    // if(this.usuario == ''){
    //   this.db.obtenerSesion().then(data => {
    //     this.usuario = data.usuario;
    //     this.contrasena = data.contrasena;

    //     this.infoUsuario();
    //   });
    // } else {
    //   this.infoUsuario();
    // }

    BarcodeScanner.isSupported().then((result) => {   //esto es para ver si soporta o no soporta el qr el dispositivo
      this.isSupported = result.supported;            //then es promesa 
    });

  }

  // async infoUsuario() {
  //   try {
  //     let datos_espera = this.api.personaInfo(this.usuario, this.contrasena);
  //     let datos = await lastValueFrom(datos_espera);

  //     let json_texto = JSON.stringify(datos);
  //     let json = JSON.parse(json_texto);

  //     this.correo = json['correo'];
  //     this.nombre = json['nombre'];
  //     this.apellido = json['apellido'];
  //   } catch (error) {
  //     console.error('Error al obtener información del usuario:', error);
  //   }

  // infoUsuario() {
  //   // Modificar según cómo obtienes la información del usuario en tu API
  //   this.api.personaInfo(this.usuario, this.contrasena)
  //     .subscribe((data: any) => {
  //       this.correo = data.correo;
  //       this.nombre = data.nombre;
  //       this.apellido = data.apellido;
  //     }, (error) => {
  //       console.error('Error al obtener información del usuario:', error);
  //     });
  // }

  navegarCambiarContrasena(){
    let extras: NavigationExtras = {
      state: {
        usuario: this.usuario,
        contrasena: this.contrasena
      },
      replaceUrl: true
    }
    this.router.navigate(['cambiar-contrasena'], extras);
  }

  cerrarSesion() {
    this.db.eliminarSesion();

    let extras: NavigationExtras = {
      replaceUrl: true
    }
    this.router.navigate(['login'], extras);
  }

  async scan(): Promise<void> {
    const ress = await BarcodeScanner.isGoogleBarcodeScannerModuleAvailable();

    if (!ress.available) {
      await BarcodeScanner.installGoogleBarcodeScannerModule()
    }

    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }

}
