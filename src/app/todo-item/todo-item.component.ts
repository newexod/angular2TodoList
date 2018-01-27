import {Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy} from '@angular/core';
import {Todo} from "../todo";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {Itodo} from "../interfaces/itodo";

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy{
  // editable: boolean = false;

  /* Перенёс в edit-todo
  todoForm = new FormGroup({
    title: new FormControl({value: '', disabled: true}, Validators.required),
    done: new FormControl( '', Validators.required)
  });
  */


  // form = new FormControl({value: '', disabled: true}, Validators.required);

  isEdit: boolean = false;
  title: string = '';

  // edit: string = '';


  @Input() todo: Todo;

  @Output() onChangedDeleteItem = new EventEmitter();
  deleteItem(todo: Itodo): void {
    this.onChangedDeleteItem.emit(todo.id);
  }

  @Output() onChangedEditItem = new EventEmitter();
  editItem(todo: Itodo): void {
    this.router.navigate(['/todo', todo.id]); // установил роут для определённой тудушки

    // !!!!! ЭТО ВЕРНУТЬ !!!!!
    // if (this.todoForm.controls.title.disabled) {
    //   this.todoForm.controls.title.enable();
    // } else {
    //   this.todoForm.controls.title.disable();
    // }
    this.onChangedEditItem.emit(todo);
  }

  constructor(private router: Router) {
    // debugger;

  }

  ngOnInit() {
  //   const {title, done, dateOfEditing} = this.todo;
  //   this.todoForm.patchValue({title, done, dateOfEditing});
  //
  //   this.todoForm.controls.title.valueChanges.subscribe(title => {
  //     const dateOfEditing = Date.now();
  //     // console.log(dateOfEditing);
  //
  //     const newTodo = {...this.todo, title, dateOfEditing};
  //     this.onChangedEditItem.emit(newTodo);
  //   });
  //
  //   this.todoForm.controls.done.valueChanges.subscribe(done => {
  //     // debugger;
  //
  //     const dateOfPerformance = Date.now();
  //     // console.log(dateOfPerformance);
  //
  //     console.log(done);
  //     let newTodo = {...this.todo, done, dateOfPerformance};
  //     console.log(newTodo)
  //
  //     if (!done) {
  //       newTodo.dateOfPerformance = parseInt('');
  //     }
  //
  //
  //     this.onChangedEditItem.emit(newTodo);
  //   });
  }

  ngOnChanges() {
    // debugger;
    // this.form.setValue({
    //   title: this.title
    // })
  }

  ngAfterViewInit() {
    // debugger;
  }

  ngOnDestroy() {
    // debugger;
  }


  // check(todo): void {
  //   console.log(todo);
  //   debugger;
  //   // console.log(this.todo.done)
  //   if (this.todo.done) {
  //     todo.dateOfPerformance = '';
  //   } else {
  //     todo.dateOfPerformance;
  //   }
  //
  //   this.todo.done = !this.todo.done;
  //   console.log(this.todo.dateOfPerformance)
  // }
}
