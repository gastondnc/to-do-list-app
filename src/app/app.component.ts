import { Component } from '@angular/core';


// Imports de entorno de desarrollo //
import { TASKS } from '../mocks/task.mock'
import { DataForm, Task } from './models/task.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // Declaración de propiedades de la Clase //
  public title = 'Todo List';
  public tasks: Task[] = [];
  public statusTasks: string[] = [ 'pending', 'process', 'finished' ];
  public selectedStatus: string = '';
  public taskToEdit: Task | undefined = undefined


  constructor(){


    this.getLocalStorage()

  }

  // Método para actualizar las task //
  updateTasks(data: DataForm) {
    console.log(data)

    if(data.isNew === true){
      this.tasks = [data.task, ...this.tasks]
    }else{
      this.tasks = this.tasks.map((task)=> {
        let obj = task
        if(task.id === data.task.id){
          obj = data.task
        }
        return obj
      })

      this.taskToEdit = undefined
      console.log('tarea para actualizar', data.task)
    }

    this.setLocalStorage()
  }

  // Método para editar las task //
  editTask(indexToEdit: number){
    this.taskToEdit = {...this.tasks[indexToEdit]}
    console.log(this.taskToEdit)
  }

  // Meétdo para borrar las task //
  deleteTask(indexToDelete: number) {
    this.tasks = this.tasks.filter( (_, actualIndex)  => actualIndex !== indexToDelete)


    this.setLocalStorage()
  }


  setLocalStorage() {

    const setTask = this.tasks

    localStorage.setItem( 'tasks', JSON.stringify(setTask)  )

    console.log(setTask)

  }


  getLocalStorage(){

    const getTasks: any[] = JSON.parse(localStorage.getItem( 'tasks' ) || '[]'  )
    this.tasks = getTasks
    console.log(getTasks)

  }


}
















