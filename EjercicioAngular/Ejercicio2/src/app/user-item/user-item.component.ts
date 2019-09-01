import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {User} from '../user';

//Cuidado con este import
//import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
	//Le quitamos estos datos
  @Input() nombre: string; //Poner un decorador con Input xq es una variable que viene de fuera
	@Input() edad:number;
	@Input() trabaja: boolean;
  @Input() usuario: User;
  @Output() borrar = new EventEmitter();//Objeto que emite eventos --> hay que importar EventEmitter y  Input,  Output
  constructor() {
  //Le quitamos estos datos, no tiene sentido
  /** this.nombre='Rosa';
 	    this.edad=35;
 	    this.trabaja=true;*/

}

  ngOnInit() {
  }
  avisarborrar(){
    this.borrar.emit();

  }
}
