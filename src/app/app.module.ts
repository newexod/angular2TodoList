import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { NotFoundComponent } from './not-found/not-found.component';


import { TodoService } from "./services/todo.service";


import { Routes, RouterModule } from "@angular/router";
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { TodoComponent } from './todo/todo.component';


const appRoutes: Routes = [
  {path: '', component: TodoComponent},
  {path: 'todo/:id', component: EditTodoComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoListComponent,
    TodoItemComponent,
    NotFoundComponent,
    EditTodoComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
