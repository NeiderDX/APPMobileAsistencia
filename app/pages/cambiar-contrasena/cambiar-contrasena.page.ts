import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DbService } from 'src/app/services/db.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.page.html',
  styleUrls: ['./cambiar-contrasena.page.scss'],
})
export class CambiarContrasenaPage implements OnInit {

  mdl_usuario: string = '';
  mdl_contraNueva: string = '';
  mdl_contraVieja: string = '';
  mdl_confirmacion: string = '';

  v_visible = false;
  v_mensaje = '';


  constructor(private router: Router, private db: DbService, private api: ApiService) { }

  ngOnInit() {
  
  }

  // async almacenarUsuario(){
  //   let data = this.api.personaAlmacenar(
  //     this.mdl_usuario,
  //     this.mdl_contrasena,
  //     this.mdl_correo,
  //     this.mdl_nombre,
  //     this.mdl_apellido
  //   );
  //   let respuesta = await lastValueFrom(data);
  //   let jsonTexto = JSON.stringify(respuesta);
  //   console.log(jsonTexto);
  //   this.db.almacenarUsuario(
  //     this.mdl_usuario,
  //     this.mdl_contrasena,
  //     this.mdl_correo,
  //     this.mdl_nombre,
  //     this.mdl_apellido
  //   );
  //   this.router.navigate(['login']);
  // }



  async cambiarContrasena(){
    let datos_espera = this.api.personaModificarContrasena(
      this.mdl_usuario, this.mdl_contraVieja, this.mdl_contraNueva
    );
    let datos = await lastValueFrom(datos_espera);

    let json_texto = JSON.stringify(datos);
    let json = JSON.parse(json_texto);

    if (json['result'][0].RESPUESTA == 'OK') {
      this.router.navigate(['login'], { replaceUrl: true });
    } else {
      console.log('Error al cambiar la contraseña: ' + json_texto);
    }
  } catch () {
    console.error('Error en la solicitud para cambiar la contraseña:');
  }
}

  

 

  // cambiarContrasena(){
  //   this.db.loginUsuario(this.usuario, this.mdl_actual)
  //     .then(data => {
  //       if(data ==0 ){
  //         this.v_mensaje = 'La contraseña actual no es correcta';
  //       } else {
  //         if (this.mdl_nueva != this.mdl_confirmacion){
  //           this.v_visible = true;
  //           this.v_mensaje = 'Las contraseñas ingresadas no coinciden';
  //         } else{
      
  //           this.db.cambiarContrasena(this.usuario, this.contrasena, this.mdl_nueva);
      
  //           let extras: NavigationExtras = {
  //             replaceUrl: true
  //           }
  //           this.router.navigate(['login'], extras);
  //         }
  //       }
  //     })

   
  // }


