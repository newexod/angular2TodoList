import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from "../todo";
import {Itodo} from "../interfaces/itodo";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent{

  @Input() todos: Todo[];


  @Output() onChangedDeleteItem = new EventEmitter();
  deleteItem(id: number): void {
    this.onChangedDeleteItem.emit(id);
  }

  @Output() onChangedEditItem = new EventEmitter();
  editItem(todo: Itodo): void {
    console.log(todo);
    this.onChangedEditItem.emit(todo);
  }
}
