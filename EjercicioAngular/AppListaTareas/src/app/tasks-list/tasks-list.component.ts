import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  private id=0;
//Cada tareaserá un objeto JSON con los atributos: id, title y pending(puede ser true o false)
 private tasks: Task[]=[];
  constructor() {

   }

  ngOnInit() {
  }
  deleteTask(task: Task) {
    this.tasks.splice(this.tasks.findIndex(t => task.id === t.id), 1);
  }
    addTask() {
     let title: string = prompt('Por favor, introduce un nombre de tarea');
    this.tasks.push({ id: this.id++, title: title, pending: true });
  }

}
