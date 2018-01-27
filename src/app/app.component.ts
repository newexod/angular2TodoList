import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import { Todo } from "./todo";

import { TodoService } from "./services/todo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // // edit: string = '';
  //
  // id: number = Number(new Date());
  // // nextId: number = 1;
  // public todos: Todo[] = [];
  // // @Output() onDeleteItem = new EventEmitter();
  //
  // constructor(private todoService: TodoService) {}
  //
  ngOnInit() {
  //   this.getTodos();
  }
  //
  // getTodos() {
  //   this.todos = this.todoService.todos;
  // }
  //
  // onAddItem(todo) {
  //   // console.log(todo.value);
  //   // console.log(todo.dateOfCreation);
  //   this.todoService.newTodo({
  //     id: this.id++,
  //     title: todo.value,
  //     done: false,
  //     dateOfCreation: todo.dateOfCreation,
  //     dateOfEditing: todo.dateOfEditing,
  //     dateOfPerformance: todo.dateOfPerformance
  //   });
  //
  //
  // }
  //
  // onChangedDeleteItem(value) {
  //   // console.log(value);
  //   this.todoService.deleteTodo(value)
  // }
  //
  // onChangedEditItem(value) {
  //   // console.log(value);
  //   this.todoService.editTodo(value);
  // }


}
