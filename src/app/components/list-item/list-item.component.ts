import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent {

@Input('item') item: Task = { id: '', title: '', description: '', status: '' };
@Input('index') index: number = 0;
@Output('on-edit') onEditEmitter: EventEmitter<number> = new EventEmitter()
@Output('on-delete') onDeleteEmitter: EventEmitter<number> = new EventEmitter()

  constructor(){}

  editHandler(index: number) {
    this.onEditEmitter.emit(index)
  }


  deleteHandler(index: number){
    this.onDeleteEmitter.emit(index)

  }

}
