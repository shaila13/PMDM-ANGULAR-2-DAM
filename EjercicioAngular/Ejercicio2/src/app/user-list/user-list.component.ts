import { Component, OnInit } from '@angular/core';
//Importamos la clase que hemos creado anteriormente de usuarios
import {Usuario} from '../modelo'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
public nombre_componente="Lista de usuarios";
//Declaramos un array de usuarios
usuarios: Array<Usuario>;

  constructor() { 
  	//Rellenamos el array y lo inicializamos
  	this.usuarios = [
  	new Usuario ('Maria',23,true),
	  new Usuario ('Juan',18,false),
	  new Usuario ('Lucas',35,true),
	  new Usuario ('Luisa',45,true)
  	];}

  ngOnInit() {
  }
borrarUsuario(nombre:string){
  let indice:number=this.usuarios.findIndex(user => user.nombre===nombre);
   if (indice!=-1){
      this.usuarios.splice(indice,1);
    }
}
aniadirUsuario(usuario:Usuario){

  usuarios.push(usuario);

}
}
