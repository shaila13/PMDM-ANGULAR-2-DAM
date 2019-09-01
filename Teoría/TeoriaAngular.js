---- LANZAR ANGULAR

Debemos ir a la carpeta donde tenemos el proyecto creado --> 

cd C:\Users\Shaila\Documents\DAM\2 DAM\PMDM\ANGULAR\angularCurso

ng serve 
//Te lo abre directamente
ng serve --open

Vamos a internet y ponemos http://localhost:4200/

---- TEORÍA

**** COMPONENTES: 

Un componente al finals va a controlar un trozo de pantalla o de la vista. Todo lo que se puede ver en pantalla es 
controlado y gestionado por este tipo de elementos.
La lógica de un componente dentro de una clase en ANGULAR es que da soporte a una vista interactuando con ella a 
través de im API con propiedades y métodos.
El componente hace de mediador entre la vista a través de la plantilla y la lógica de la app donde se incluirá el 
modelo de datos, es decir una especie de controlador.


import { Component } from '@angular/core';

//SI PONEMOS @ DELANTE --> DECORADOR
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularCurso';
}


**** PLANTILLAS: 

Las plantillas van a definir la vista de los componentes. Son htmls y tienen sintaxis especial de ANGULAR. Trabajando 
con el databinding y las directivas.

**** DECORADORES Y METADATOS: 

Con los decoradores (patrón de diseño) vamos a configurar dinamicamente atributos/metadatos de las clases y componentes.
Los metadatos van a describir a las clases pero también describen relaciones, si tenemos un componente y una plantilla el
metadato se va a encargar de decirle a ANGULAR que ese componente y esa plantilla van juntos, entre otras muchas cosas.

**** SERVICIOS: 

Clases que facilitan la reutilización --> elementos dentro de la arquitectura de ANGULAR y mediante la inyección de dependencias
los podemos usar en otros componentes pricipales.

**** PROVIDERS: 

Son servicios que nos proveen de datos o funcionalidades mediante sus métodos. Existen providers/servicios propios de ANGULAR o 
creados por nosotros mismos.

**** DIRECTIVAS:

Son funcionalidades aplicables al DOM y a los elementos HTML en las plantillas de un componente. Puede servir para controlar que 
un div se muestre o no o recorrer un array en la vista o incluso también puede servir para darle un estilo u otro a un elemento 
de HTML o también para interactuar con el modelo de datos del componente.

Básicamente son nuevos atributos para aplicarle a cualquier cosa en nuestra plantilla/vista.

**** MÓDULOS  

https://www.npmjs.com/package/@angular/cli

Scaffold          --->	Usage
Component         --->	ng g component my-new-component
Directive         --->	ng g directive my-new-directive
Pipe           	  --->	ng g pipe my-new-pipe
Service           --->  ng g service my-new-service
Class             --->	ng g class my-new-class
Guard             --->	ng g guard my-new-guard
Interface         --->	ng g interface my-new-interface
Enum           	  --->	ng g enum my-new-enum
Module            --->	ng g module my-module

SIEMPRE!!!!
Proyecto          --->	ng new my-proyecto-angular
Angular Material  --->	ng add @angular/material

ng generate @angular/material:material-nav --name=menu

HOOKS O CLICOS DE VIDA

Más importantes:
OnInit, DoCheck --> Interface

La implementación de la interfaz OnInit no es obligatoria. Su uso es una Buena Práctica que debe ser utilizada para evitar 
errores, por ejemplo, escribir onInit en lugar de ngOnInit, lo que causaría que el método no sea llamado.

