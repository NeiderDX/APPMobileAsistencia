import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = 'https://fer-sepulveda.cl/API_PRUEBA_2/api-service.php';
  ruta = 'https://fer-sepulveda.cl/API_PRUEBA_3/api-service.php';
  constructor(private http: HttpClient ) { }

  personaAlmacenar(usuario: string, contrasena: string, correo: string, nombre: string, apellido: string) {
    return this.http.post(this.api, {
      nombreFuncion: 'UsuarioAlmacenar',
      parametros : [
        usuario, correo, contrasena, nombre, apellido
      ]
    }).pipe(); //pipe: todo el resultado de la petición lo coloca en una "tuberia" para sacarlos de ahi.
  }

  personaLogin(usuario: string, contrasena: string){
    return this.http.post(this.api, {
      nombreFuncion: 'UsuarioLogin',
      parametros : [
        usuario, contrasena
      ]
    }).pipe();
  }

  personaModificarContrasena(usuario: string, contraseNueva: string, contrasenaActual: string){
    return this.http.patch(this.api, {
      nombreFuncion: 'UsuarioModificarContrasena',
      parametros: [
        usuario, contraseNueva, contrasenaActual
      ]
    }).pipe();
  }

   personaInfo(correo: string, nombre: string, apellido: string) {
    return this.http.post(this.api, {
      nombreFuncion: 'ObtenerInformacionUsuario',
      parametros: [
        correo, nombre, apellido
      ]
    });
  }
 
  //QR: 

  asistenciaAlmacenar(usuario: string, asignatura: string, seccion: string, fecha: string){
    return this.http.post(this.ruta, {
      nombreFuncion: "AsistenciaAlmacenar",
      parametros: [
        usuario, asignatura, seccion, fecha
      ]
    }).pipe();
  }

  asistenciaObtener(usuario: string){
    return this.http.get(this.ruta+ '?nombreFuncion=AsistenciaObtener&usuario' + usuario).pipe();
  }


}
