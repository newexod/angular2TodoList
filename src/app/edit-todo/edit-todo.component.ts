import {Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy} from '@angular/core';
import {Todo} from "../todo";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import { TodoService } from "../services/todo.service";
import {Itodo} from "../interfaces/itodo";


@Component({
  selector: 'edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  private id: number;
  private routeSubscription: Subscription;

  @Input() todo: Todo;
  // public todo = {};

  todoForm = new FormGroup({
    title: new FormControl({value: '', disabled: false}, Validators.required),
    done: new FormControl( '', Validators.required)
  });

  // @Output() onChangedEditItem = new EventEmitter();
  // editItem(todo) {
  //   console.log(this.todo)
  //
  //
  //   // if (this.todoForm.controls.title.disabled) {
  //   //   this.todoForm.controls.title.enable();
  //   // } else {
  //   //   this.todoForm.controls.title.disable();
  //   // }
  //
  //
  // }

  goBack(): void {
    this.router.navigate(['']);
  }


  TodoById(id: number): void {
    this.todo = this.todoService.TodoById(id);
    // this.todo = this.todoService.todo;
  }

  constructor(private todoService: TodoService,
              private router: Router,
              private route: ActivatedRoute) {
    this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
  }

  ngOnInit(): void {
    this.TodoById(this.route.snapshot.params['id']);

    // console.log(this.route.snapshot.params['id'])
    this.id = this.route.snapshot.params['id'];

    const {title, done, dateOfEditing} = this.todo;
    this.todoForm.patchValue({title, done, dateOfEditing});

    this.todoForm.controls.title.valueChanges.subscribe(title => {
      const dateOfEditing = new Date();

      const newTodo: Itodo = {...this.todo, title, dateOfEditing};


      // this.onChangedEditItem.emit(newTodo);
      this.todoService.editTodo(newTodo);
    });

    this.todoForm.controls.done.valueChanges.subscribe(done => {
      const dateOfPerformance = new Date();
      let newTodo = {...this.todo, done, dateOfPerformance};

      if (!done) {
        newTodo.dateOfPerformance = null;
      }


      // this.onChangedEditItem.emit(newTodo);
      this.todoService.editTodo(newTodo);
    });
  }

  // check(todo) {
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
