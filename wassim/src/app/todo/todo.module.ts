import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {TodoPage} from "./todo.page";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [TodoPage],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: TodoPage
    }]),
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
  ]
})
export class TodoModule {
}
