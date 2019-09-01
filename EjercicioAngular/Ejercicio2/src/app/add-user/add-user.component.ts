import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Usuario} from '../modelo/usuario';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

nombreUsuario:string;
apellidoUsuario:string;
edadUsuario:number;
@Output() salidaUsuario = new EventEmitter<Usuario>();//Objeto que emite eventos --> hay que importar EventEmitter y  Input,  Output
 
  constructor() { }

  ngOnInit() {
  }
	addUsuario(){
		let usuarioMio= new Usuario(this.nombreUsuario,this.apellidoUsuario,this.edadUsuario);
		this.salidaUsuario.emit(usuarioMio);

	}
}
