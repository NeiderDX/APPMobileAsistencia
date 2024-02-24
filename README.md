Esto es por si ya lo tienes instalado y no te funciona para evitar errores:
paso 0.1: de %appdata% borrar nvm.
paso 0.2 de archivos de programa Borrar nodejs.

instalar nodejs para las apps(esto es solo una vez tu pc):

Paso 1: Instalar Nodejs https://nodejs.org/es
paso 2: crear una carpeta para almacenar tus apps donde la desees 
paso 3: en la carpeta de las apps ejecutar el cmd.
paso 4:  npm install -g @ionic/cli 
(comando de nodejs instalador de paquetes)(node package manage)
(la -g es global para que cualquier usuario pueda utilizarlo en el pc)
(nodeJS:una plataforma para desarrollar aplicaciones de software (javaScript) )

como crear una app mobile:
paso 1: abrimos la cmd de tus proyectos.
paso 2: ionic start Nombre_DelProyecto blank 
(blank es el template a utilizar, un template son plantillas
en este caso la app empezara con todo blanco).
paso 3: Seleccionar el framework a utilizar (en este caso angular).
paso 4: Seleccionar NgModules.
(el proyecto que vamos a crear pesara mucho y tambien tendra
muchas carpetas ya que es una tecnologia hibrida para iphone y android)
paso 5: No crear Cuenta (NodeJS) Poner: N
paso 6: Con estos pasos se nos creara el directorio con nuestra app mobile
entramos a la carpeta y ejecutamos el cmd seguidamente finalizamos 
escribiendo code . (instalar visual studio code).
paso 8: nos recomendará visual studio instalar las extensiones de ionic, con confianza le apretamos a la x (esto es más para autocompletado,etc).
paso 9: Instalar extensión Material Icon theme (esto es para que las carpetas y archivos y extensiones tengan iconos y se vea todo bien y reconocible, solo se hace una vez!).
paso 10: Recomiendo inmediatamente abrir la terminal de visual code
con el atajo control + shift + ñ
paso 11: Ionic serve (para correr el proyecto, asi vamos a poder ver los cambios en tu navegador predeterminado apretar control + c para detener la app)(si Ionic serve no sirve como comando ejecutamos el powershell de windows y ejecutamos la siguiente linea: Set-ExecutionPolicy Unrestricted esto sirve para quitar politica y poder ejecuta el comando en VS).
paso 12: Permitir acceso a NodeJS (redes privadas de preferencia).
paso 13: presionar F12 en el navegador y le damos la apariencia como celular(apretar el icono de celular ).
Carpetas:
.angular: Nos indica en que framework se trabaja.
.vscode: (en este caso no la utilizaremos)editor.
.ngModules: almacenar los módulos necesarios para su proyecto (predeterminada).
src:
	app: Donde se edita nuestro hmtl css,etc.
	assets: Recursos estaticos.
	environments: Para pasarlo de desarollo a productivo.
	theme: Conjunto de aspecto visual (Como se ve la app).

Necesitamos empezar con el codigo, para esto existe la documentación de ionic,
donde nos proporcionaran el codigo necesario para "casi todo" lo necesario,
podemos poner ionic en google y seleccionar los componentes o directamente ir a este URL: https://ionicframework.com/docs/components

Tambien para nuestra app necesitaremos una paleta de colores para cambiar aspecto del fondo,botones,etc para esto buscamos en google: gradient o vamos directamente a este URL: https://cssgradient.io/ y abajo de la paleta de colores
nos proporcionara el codigo que tenemos que copiar, en este caso copiaremos la linea de codigo más grande ejemplo: background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(1,64,102,1) 30%, rgba(1,85,124,1) 40%, rgba(0,212,255,1) 100%); esto se pega en el css que deseemos.

Paso 14: En este caso vamos a eliminar la carpeta home del proyecto (esto es con el fin de que el proyecto no tenga una pagina principal (por lo tanto si queremos ir devuelta al navegador aparecera Cannot GET / por la falta de esta),Para que nosotros la creemos).
Paso 15: ionic g page pages/login (la g es para generar, donde dice pages tiene como referencia que vamos a crear una carpeta llamada page y adentro contendra la carpeta Login).
Paso 16: Google nos pedira si le proporcionamos Info anonima en este caso ponemos N para rechazar la propuesta.
Paso 17: ionic g page pages/principal (creamos una segunda página, en este caso pondremos principal es una pantalla despues del login,las páginas se crearan dentro de app).
Paso 18:Como anteriormente comente aparecerá Cannot GET /  por la falta de home (si vamos a ver el navegador).
paso 19: dirigirse a app-routing.module.ts (Raiz APP, donde nos permitira navegar de una página a otra).
paso 20: vamos a quitar estas lineas:
 {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  }
paso 21: Luego cambiamos donde dice redirecTo: 'login' (donde dice login podriamos cambiarla por cualquier página que queramos como principal)

Recomendación ir al login.html y borrar esto:
<ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">login</ion-title>
    </ion-toolbar>
  </ion-header>

archivos:
- login.page.ts: es la logica de la app (donde daremos crearemos nuestras funciones).
- login.page.spec.ts (es para pruebas unitarias, en este caso no la usaremos).

En el login.page.ts tendremos el:
constructor: es lo que se encarga fabricar nuestra página.
ngOnInit(): Aquí puedes realizar inicializaciones y acciones iniciales: Por ejemplo, cargar datos, configurar valores, etc.

//crear servicio
ionic g service services/login
los servicios no tienen parte visual solamente ts
el .spec no lo utilizaremos (por esta clase)

//plataforma android studio 

1.-INSTALAR ANDROID STUDIO
	1.1 CREATE A NEW PROJECT
	1.2 IR A LA LUPA Y PONER SDK
	1.3 IR A SDK MANAGER
	1.4 DESCARGAR VERSIÓN 10 ANDROID
	1.5 COPIAR LA RUTA DEL SDK LOCATION Y LA DEJAMOS A MANO --> C:\Users\CETECOM\AppData\Local\Android\Sdk

2.-INSTALAR JDK 17
	1.1 VER SI ESTA INSTALADA ARCHIVOS DE PROGRAMA --> JAVA Y DEBE SALIRTE CARPETA DE LA VERSION
	1.2 SI NO IR A GOOGLE Y BUSCAR JDK 17 Y APRETAR LA PRIMERA OPCIÓN
	1.3 COPIAR LA RUTA DEL JDK --> C:\Program Files\Java\jdk-17

3.-AGREGAR 2 VARIABLES DE ENTORNO 
	1.1 EN EL BUSCADOR DE WINDOWS PONER ENV  Y SI NO SALE PON ENTORNO
	UNA VARIABLE DE ENTORNO ES AGREGARLE UN ALIAS A LA RUTA
	SE NECESITA POR QUE LA APLICACION ANDROID STUDIO LA BUSCA CON ESTE ALIAS
	1.2 EN LA DE ARRIBA DONDE DICE VARIABLES DE USUARIO:
		1ERA:
		- NOMBRE DE LA VARIABLE: JAVA_HOME
		- VALOR DE LA VARIABLE: C:\Program Files\Java\jdk-17     (JDK17)
		2DA:
		- NOMBRE DE LA VARIABLE: ANDROID_SDK_ROOT
		- VALOR DE LA VARIABLE:  C:\Users\CETECOM\AppData\Local\Android\Sdk
	1.3 ACEPTAR TODO DESPUES DE AGREGAR LAS VARIABLES
4.-PRESIONAR EL CELULAR (ANDROID STUDIO)
	1.1 CREAR NUEVO
	1.2 PONER EL CELULAR POR DEFECTO
	1.3 Y DESCARGAMOS LA VERSIÓN 10.0

5.-CREAR APP IONIC
	1.1 ionic start app-db blank

6.-CREAR PÁGINAS Y SERVICIOS
	1.1 ionic g page pages/login
	1.2 ionic g service services/login
	1.2 abrir la app code .
7.-CONFIGURAR BASE DE DATOS SQLITE
	1.1 IR A LA DOCUMENTACION DE IONIC E IR A LA LUPA Y PONER: sqlite
	1.1 capacitor
	el capacitor es el motor que nos permite ...
	1.2 npm install cordova-sqlite-storage  //se descarga del espacio disponible
	1.3 npm install @awesome-cordova-plugin 
	sino npm install @awesome-cordova-plugins/sqlite
//motor de la base de datos
	1.4 copiar ruta en servicio --> import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
	//esa importación se encuentra mas abajo donde dice angular (documentación)
	1.5 dejar el constructor asi --> constructor(private sqlite: SQLite)
	1.6 dentro del constructor pondremos:
	this.sqlite.create({
 	 name: 'data.db',
  	location: 'default'
	})
  	  .then((db: SQLiteObject) => {

	db.executeSql('create table danceMoves(name VARCHAR(32))', [])
      .then(() => console.log('Executed SQL'))
      .catch(e => console.log(e));
	})
  .catch(e => console.log(e));
	1.7 dirigirse a app.module.ts y en ese archivo se pone:
	import {sql}
	al momento de escribir sql se autocompleta
	1.8 en providers al final poner , y poner SQlite

8.-PASAR A PROYECTO NATIVO
	1.1 ionic cap sync //ejecutarlo cuando el proyecto ya esta terminado, con esto
	//en el proyecto se crea una carpeta llamada www
	1.2 npm install @capacitor/android  //CAPACITOR ES EL MOTOR QUE NOS PERMITE CONVERTIR NUESTRA APP WEB A ANDROID
	1.3 npx cap add android //"este comando tambien es para alterar la estructura del proyecto" npx es una version mejorada del npm
	en caso de que el proyecto necesite dependencias este comando las genera --> se genera la carpeta android
	1.4 npx cap run android --livereload --external //correr el proyecto android, se toma la carpeta anteriormente creada //el external es opcional y es para un dispositivo externo
	npx cap open android


COMANDOS PARA QUE SE PUEDA OCUPAR SQLITE (BD LOCAL)

npm install cordova-sqlite-storage
npm install @ionic-native/core
npm install @ionic-native/sqlite
ionic cap sync

si estos comandos te tiran error hay que forzar la instalación (--force despues de la linea de codigo).

SE TIENE QUE TRABAJAR EN ANDROID STUDIO POR QUE ?
como vamos a trabajar con sqlite (local bd) la forma en que vamos a trabajar no es compatible con el navegador (por eso necesitamos equipos fisicos o virtuales).

C:\Users\Dxshn\AppData\Local\Android\Sdk

codigo qr es un codigo de barra en 2d

npm install @capacitor/android

npx cap add android

npm install @capacitor-mlkit/barcode-scanning

npx ionic cap sync

hay que agregarle estos 2 permisos:

<uses-permission android:name="android.permission.CAMERA" />

<uses-permission android:name="android.permission.FLASHLIGHT"/>

hay que entrar a esto->
android->
app->
src->
main->
AndroidManifest.xml

al final dice permisos y los pegamos: 

<uses-permission android:name="android.permission.CAMERA" />

<uses-permission android:name="android.permission.FLASHLIGHT"/>

en el mismo archivo:

abajo del </provider>
<meta-data android:name="com.google.mlkit.vision.DEPENDENCIES" android:value="barcode_ui"/>
y arriba del </aplication>

cerrar ese archivo

en nuestra pagina principal.ts 

import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';

arriba del constructor:
 isSupported = false;
  barcodes: Barcode[] = [];

en el constructor(private alertController: AlertController)

en el ngOinit hacia abajo:

ngOnInit() {
    BarcodeScanner.isSupported().then((result) => {   //esto es para ver si soporta o no soporta el qr el dispositivo
      this.isSupported = result.supported;            //then es promesa 
    });
  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();  
    if (!granted) { //si los permisos son otorgados pasa de aqui
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes); //hasta aca 
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
  }

  async presentAlert(): Promise<void> { //si no son otorgados de aqui
    const alert = await this.alertController.create({
      header: 'Permission denied',
      message: 'Please grant camera permission to use the barcode scanner.',
      buttons: ['OK'],
    });
    await alert.present();
  }
}


en el html:

  <ion-list>
    <ion-item *ngFor="let barcode of barcodes">
      <ion-label position="stacked">{{ barcode.format }}</ion-label>
      <ion-input type="text" [value]="barcode.rawValue"></ion-input>
    </ion-item>
  </ion-list>
  <ion-fab slot="fixed" vertical="bottom" horizontal="end">
    <ion-fab-button (click)="scan()" [disabled]="!isSupported">
      <ion-icon name="scan"></ion-icon>
    </ion-fab-button>
  </ion-fab>

ionic cap run android -l ---external para correr el programa

api tiene 3 funciones 
primera dejarte presente
devolverte el porcentaje de asistencia en las asignaturas
eliminar tu asistencia
simplemente consumir la api

se puede escanear en el emulador
ahi en la principal apretas el boton para escanear 
y en la habitacion hay una pared puedes poner en los 3 puntos del emulador
una imagen en la pared

generar un .apk

npx cap open android (se abrira android studio, se abre la carpet anadroid en android stduio)

en el emulador (hay que esperar que cargue el android studio)

build
build bundls / apks
build apks

va aparecer un boton abajo que dice locate lo aprietas
y te aparecera la carpeta que contiene el apk



API NO REQUIERE NINGUN COMANDO (EMPEZAR VIENDO ESO)
LOS VIDEOS QUE SEGUI ESTABAN MALOS POR ESO ME SALINA MAL LOS PROYECTOS
