import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
@Injectable({
  providedIn: 'root'
})
export class DbService {

  api = 'https://fer-sepulveda.cl/API_PRUEBA_2/api-service.php';

  constructor(private sqlite: SQLite) {
    this.crearTablas();
  }

  crearTablas(){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('create table if not exists persona(usuario varchar(30), contrasena varchar(30), correo varchar(75), nombre varchar(30), apellido varchar(30))', [])
          .then(() => console.log('LGP: TABLA PERSONA CREADA CORRECTAMENTE'))
          .catch(e => console.log('LGP: ERROR AL CREAR TABLA PERSONA: '+ JSON.stringify(e)));
      })
      .catch(e => console.log('LGP: ERROR AL CREAR O ABRIR DB'));

      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          db.executeSql('create table if not exists sesion(usuario varchar(30), contrasena varchar(30))', [])
            .then(() => console.log('LGP: TABLA SESION CREADA CORRECTAMENTE'))
            .catch(e => console.log('LGP: ERROR AL CREAR TABLA SESION: '+ JSON.stringify(e)));
        })
        .catch(e => console.log('LGP: ERROR AL CREAR O ABRIR DB'));
  }

  almacenarUsuario(usuario: string, contrasena: string, correo: string, nombre: string, apellido: string) {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('insert into persona values(?, ?, ?, ?, ?)', [usuario, contrasena, correo, nombre, apellido])
          .then(() => console.log('LGP: PERSONA ALMACENADA OK'))
          .catch(e => console.log('LGP: ERROR AL ALMACENAR PERSONA: '+ JSON.stringify(e)));
      })
      .catch(e => console.log('LGP: ERROR AL CREAR O ABRIR DB'));

  }

  almacenarSesion(usuario: string, contrasena: string) {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('insert into sesion values(?, ?)', [usuario, contrasena])
          .then(() => console.log('LGP: SESION ALMACENADA OK'))
          .catch(e => console.log('LGP: ERROR AL ALMACENAR SESION: '+ JSON.stringify(e)));
      })
      .catch(e => console.log('LGP: ERROR AL CREAR O ABRIR DB'));

  }

  eliminarSesion() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('delete from sesion', [])
          .then(() => console.log('LGP: SESION ELIMINADA OK'))
          .catch(e => console.log('LGP: ERROR AL ELIMINAR SESION: '+ JSON.stringify(e)));
      })
      .catch(e => console.log('LGP: ERROR AL CREAR O ABRIR DB'));

  }

  loginUsuario(usuario: string, contrasena: string){
    return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        return db.executeSql('select count(usuario) as cantidad from persona where usuario = ? and contrasena =?', [usuario,contrasena])
          .then((data) => {
            return data.rows.item(0).cantidad;
          })
          .catch(e => console.log('LGP: ERROR AL REALIZAR LOGIN: '+ JSON.stringify(e)));
      })
      .catch(e => console.log('LGP: ERROR AL CREAR O ABRIR DB'));
  }

  validarSesion(){
    return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        return db.executeSql('select count(usuario) as cantidad from sesion', [])
          .then((data) => {
            return data.rows.item(0).cantidad;
          })
          .catch(e => console.log('LGP: ERROR AL REALIZAR SESION: '+ JSON.stringify(e)));
      })
      .catch(e => console.log('LGP: ERROR AL CREAR O ABRIR DB'));
  }

  obtenerSesion(){
    return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        return db.executeSql('select usuario, contrasena from sesion', [])
          .then((data) => {
            let objeto: any = {};
            objeto.usuario = data.rows.item(0).usuario;
            objeto.contrasena = data.rows.item(0).contrasena;
            return objeto;
          })
          .catch(e => console.log('LGP: ERROR AL OBTENER SESION: '+ JSON.stringify(e)));
      })
      .catch(e => console.log('LGP: ERROR AL CREAR O ABRIR DB'));
  }

  infoUsuario(usuario: string, contrasena: string){
    return this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        return db.executeSql('select correo, nombre, apellido from persona where usuario = ? and contrasena =?', [usuario,contrasena])
          .then((data) => {
            let objeto: any = {};
            objeto.nombre = data.rows.item(0).nombre;
            objeto.correo = data.rows.item(0).correo;
            objeto.apellido = data.rows.item(0).apellido;

            return objeto;
          })
          .catch(e => console.log('LGP: ERROR AL OBTENER INFO DE PERSONA: '+ JSON.stringify(e)));
      })
      .catch(e => console.log('LGP: ERROR AL CREAR O ABRIR DB'));

  }

  cambiarContrasena(usuario: string, contrasenaActual: string, contrasenaNueva: string){
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('update persona set contrasena = ? where usuario = ? and contrasena = ? ', [contrasenaNueva,usuario,contrasenaActual])
          .then(() => console.log('LGP: PERSONA MODIFICADA OK'))
          .catch(e => console.log('LGP: ERROR AL MODIFICAR PERSONA: '+ JSON.stringify(e)));
      })
      .catch(e => console.log('LGP: ERROR AL CREAR O ABRIR DB'));

  }

}
