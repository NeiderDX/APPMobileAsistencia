import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_usuario: string = '';
  mdl_contrasena: string = '';

  constructor(private router: Router, private db: DbService, private api: ApiService) { }

  ngOnInit() {
  }


  async ingresar(){
    let datos_espera = this.api.personaLogin(
      this.mdl_usuario, this.mdl_contrasena
    );
    let datos = await lastValueFrom(datos_espera);

    let json_texto = JSON.stringify(datos);
    let json = JSON.parse(json_texto);

    if(json['result'][0].RESPUESTA == 'LOGIN OK'){
      this.router.navigate(['principal'], {replaceUrl: true})
    } else {
      console.log('LGP:' + json_texto )
    }
  }
   
      

  // ingresar(){
  //   let extras: NavigationExtras = {
  //     replaceUrl: true, //CERRAR LA PÁGINA EN LA CUAL ESTAS NAVEGANDO, SI ESTOY EN EL LOGIN Y PASO A PRINCIPAL SE CIERRA EL LOGIN AHORRANDO RECURSOS
  //     state: { //VA VIAJAR EL MODELO USUARIO (MDL) Y SE GUARDA EN USUARIO
  //       usuario: this.mdl_usuario,
  //       contrasena: this.mdl_contrasena
  //     }
  //   }
  //  this.router.navigate(['principal'],extras);
  // }

  navegarCrearUsuario(){
    this.router.navigate(['crear-usuario']);
  }

  // login(){
  //   let extras: NavigationExtras = {
  //     replaceUrl: true, //CERRAR LA PÁGINA EN LA CUAL ESTAS NAVEGANDO, SI ESTOY EN EL LOGIN Y PASO A PRINCIPAL SE CIERRA EL LOGIN AHORRANDO RECURSOS
  //     state: { //VA VIAJAR EL MODELO USUARIO (MDL) Y SE GUARDA EN USUARIO
  //       usuario: this.mdl_usuario,
  //       contrasena: this.mdl_contrasena
  //     }
  //   }
  //   let cantidad = 0;
  //   this.db.loginUsuario(this.mdl_usuario, this.mdl_contrasena)
  //     .then(data => {
  //       cantidad = data;

  //       if (data == 1){
  //         this.db.almacenarSesion(this.mdl_usuario,this.mdl_contrasena);
  //         this.router.navigate(['principal'], extras);
  //       } else {
  //         console.log('LGP: credenciales invalidas');
  //       }
  //     })
  // }

}
