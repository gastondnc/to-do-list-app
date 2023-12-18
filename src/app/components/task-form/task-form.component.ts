import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DataForm, Task } from '../../models/task.model'

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent {

  @Input('status-tasks') statusTasks: string[] = [];
  @Input('edit-task') editTask: Task | undefined = undefined
  @Output('on-submit') onSubmitEmitter: EventEmitter<DataForm> = new EventEmitter()

  // Método Submit Form //
  submitForm(form: NgForm){
    console.log(form.value)

    const id: string = this.editTask !== undefined
                          ? this.editTask?.id
                          : new Date().getMilliseconds().toString();

    const task: Task = {...form.value, id: id};
    const data: DataForm = {
      task: task,
      isNew: this.editTask === undefined,
    }

    form.reset()
    this.editTask = undefined
    this.onSubmitEmitter.emit(data)

  }

}
