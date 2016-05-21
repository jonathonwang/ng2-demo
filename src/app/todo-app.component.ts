import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'todo-app',
  templateUrl: 'todo-app.component.html',
  styleUrls: ['todo-app.component.css']
})
export class TodoApp {
  public title = ''
  public taskList = []
  public newTask = ''
  constructor() {
    this.title = 'Todo App'
    this.taskList = [
      {title:'Hello',status: 0},
      {title:'World',status: 0},
      {title:'Go',status: 0}
    ]
    this.newTask = ''
  }
  createTask() {
    if(this.newTask !== '' && this.newTask.length > 4){
      let newTaskToCreate = { title: this.newTask, status: 0 }
      this.taskList.push(newTaskToCreate)
      this.newTask = ''
    }
  }
  deleteTask(task) {
    let index = this.taskList.indexOf(task)
    this.taskList.splice(index,1)
  }
}
