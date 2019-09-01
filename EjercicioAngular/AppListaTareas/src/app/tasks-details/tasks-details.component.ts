import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.css']
})
export class TasksDetailsComponent implements OnInit {
  @Input() task: Task;
  @Output() deleted = new EventEmitter<Task>();  // indico que voy a emitir una tarea

  constructor() { }

  ngOnInit() {
  }

  deleteTask() {
    this.deleted.emit(this.task);
  }

  completeTask() {
    this.task.pending = false;
  }

}
