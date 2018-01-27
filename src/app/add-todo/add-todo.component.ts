import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Itodo} from "../interfaces/itodo";
import {Todo} from "../todo";

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  clearVal = '';

  @Output() onAddItem = new EventEmitter<Itodo>();
  addItem(event: MouseEvent, value: string) {
    event.preventDefault();

    const todo = new Todo({
      id: Date.now(),
      title: value,
      done: false,
      dateOfCreation: new Date(),
      dateOfEditing: null,
      dateOfPerformance: null
    });

    this.onAddItem.emit(todo);

    this.clearVal = '';
  }

}
