import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DbService } from 'src/app/services/db.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  mdl_usuario: string = '';
  mdl_contrasena: string = '';
  mdl_correo: string = '';
  mdl_nombre: string = '';
  mdl_apellido: string = '';

  constructor(private db: DbService, private router: Router, private api: ApiService) { }

  ngOnInit() {
    
  }

   async usuarioAlmacenar(){
    //datos_espera es una promesa
    let datos_espera = this.api.personaAlmacenar(
      this.mdl_usuario, this.mdl_contrasena, this.mdl_correo, this.mdl_nombre, this.mdl_contrasena //variables que mandamos   
    ); //HASTA AQUI LA API SE PREPARO 
    //DE AQUI PARA ABAJO SE EJECUTA
    let datos = await lastValueFrom(datos_espera); //aqui espera los datos de la api antes de seguir
    // cuando tengamos un await a la función se le coloca el async

    let json_texto = JSON.stringify(datos); //JSON.stringify es un método en javascript que convierte un objeto javaScript en una cadena de texto JSON
    //datos es un objeto que contiene la respuesta de la api al aplicar el JSON.stringify se convierte este objeto a una cadena de texto JSON
    let json = JSON.parse(json_texto); //toma la anterior cadena de texto JSON y la convierte nuevamente en un objeto javaScript
    // Este proceso es común cuando trabajas con comunicación entre sistemas que intercambian datos en formato JSON.

    if(json['result'][0].RESPUESTA == 'OK'){
      this.router.navigate(['login'], {replaceUrl: true})
    } else {
      console.log('LGP:' + json_texto )
    }
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

  
}
