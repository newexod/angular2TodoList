import { Injectable } from '@angular/core';
import {Todo} from "../todo";
import {Itodo} from "../interfaces/itodo";

@Injectable()
export class TodoService {
  //
  isUpdateTitle: boolean = false;
  isCheck: boolean = false;

  private _todos: Todo[];
  // private _todo: number;

  public get todos(): Itodo[] {
    if (!this._todos) {
      this._todos = this.getTodosFromLocalStorage();
    }
    return this._todos;
  }

  // Для edit-todo.component.ts
  public TodoById(id:number): Itodo {
    // console.log(id)
    if (!this._todos) {
      this._todos = this.getTodosFromLocalStorage();
    }

    const todo = this._todos.find(val => val.id === +id);
    console.log(todo);

    return todo;


    // const todoIndex = this._todos.findIndex((value, val) => {
    //   console.log(value);
    //   console.log(val)
    // });
    // // console.log(this._todos);
    // return todoIndex;

  }

  public getTodosFromLocalStorage(): Itodo[] {
    const storage = localStorage.getItem('todos');

    return storage ? JSON.parse(storage) : [];
  }

  public setTodosToLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this._todos));
  }

  public newTodo(todo: Todo): void {
    /*
    * Добавить новый таск
    * в localStorage уже хранится строка, которая представляет собой массив
    * необходимо распарсить эту строку с помощью JSON.parse
    * после чего будет массив
    * и в этот массив можно запушить новую todo
    * после чего localStorage.stringify
    * */
    // console.log(todo);

    // console.log(this._todos);

    this._todos.push(todo);

    let newTask = JSON.stringify(this._todos);

    localStorage.todos = newTask;
  }

  public deleteTodo(id: number): void {
    // console.log(this._todos);

    const index = this._todos.findIndex((val) => val.id === id);
    this._todos.splice(index, 1);

    let delTask = JSON.stringify(this._todos);
    localStorage.todos = delTask;
  }

/*
* получить всю тудушку
* сравнить изменяемое id
* если равны, то изменить title
* */
  public editTodo(todo: Todo): void {
    // console.log(todo.title);
    // debugger;

    const index = this._todos.findIndex(({id}: Todo) => id === todo.id);
    // var a = [{a:1}, {a:3}, {a:5}];
    // var newTodo = {a: 7};
    // var indexW = 2;
    //
    // a[indexW] = newTodo;
    this._todos[index].title = todo.title;
    this._todos[index].done = todo.done;
    this._todos[index].dateOfEditing = todo.dateOfEditing;
    this._todos[index].dateOfPerformance = todo.dateOfPerformance;
    // console.log(todo.dateOfPerformance)

    // if (!this.isCheck) {
    //   this._todos[index].dateOfPerformance = todo.dateOfPerformance;
    // } else {
    //   this._todos[index].dateOfPerformance = '';
    // }
    // this.isCheck = !this.isCheck;

    // console.log(index);
    //
    // this._todos[index].title = todo.title;
    // this._todos[index].done = todo.done;
    //
    // // !!!!!ВРОДЕ ТОЖЕ НЕ ПРАВИЛЬНО РАБОТАЕТ!!!!!
    // if (this.isUpdateTitle) {
    //   this._todos[index].dateOfEditing = todo.dateOfEditing;
    //   // this.isUpdateTitle = !this.isUpdateTitle;
    // } else {
    //   this.isUpdateTitle = !this.isUpdateTitle;
    // }
    //
    // /*
    // * выполнение тудушки
    // *
    // * изначально тудушка не выполнена (this.isCheck = false)
    // * даты выполнения нет
    // * this._todos[index].dateOfPerformance = '';
    // *
    // * при нажатии на checkbox тудушка становится выполнена (this.isCheck = true)
    // * дата выполнения записывается в dateOfPerformance
    // * this._todos[index].dateOfPerformance = todo.dateOfPerformance;
    // *
    // *
    // * */
    //
    // // !!!!!ЧТО ТО НЕ ПРАВИЛЬНО РАБОТАЕТ!!!!!
    // if (this.isCheck) {
    //   this._todos[index].dateOfPerformance = todo.dateOfPerformance;
    //   // this.isCheck = true;
    //   this.isCheck = !this.isCheck;
    // } else {
    //   this._todos[index].dateOfPerformance = '';
    //   // this.isCheck = true;
    //   this.isCheck = !this.isCheck;
    // }

    // console.log(this._todos);

    let editTask = JSON.stringify(this._todos);
    // console.log(editTask);
    localStorage.todos = editTask;
  }
}
