import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import { Todo } from "../todo";

import { TodoService } from "../services/todo.service";
import {Itodo} from "../interfaces/itodo";

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
// edit: string = '';

  // nextId: number = 1;
  public todos: Todo[] = [];
  // @Output() onDeleteItem = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todos = this.todoService.todos;
  }

  onAddItem(todo: Itodo): void {
    // console.log(todo.value);
    // console.log(todo.dateOfCreation);
    this.todoService.newTodo(todo);


  }

  onChangedDeleteItem(todo: number): void {
    this.todoService.deleteTodo(todo)
  }

  onChangedEditItem(todo: Itodo): void {
    this.todoService.editTodo(todo);
  }
}
