import {DIALOG_DATA, DialogRef} from '@angular/cdk/dialog';
import {Component, Inject} from "@angular/core";
import {TodoItemBo} from "../bos/todo-item.bo";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-todo.modal',
  templateUrl: './todo.modal.component.html',
  styleUrls: ['./todo.modal.component.scss']
})
export class TodoModalComponent {

  public todoForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ])
  });

  constructor(public dialogRef: MatDialogRef<DialogRef>,
              @Inject(DIALOG_DATA) public data: TodoItemBo,
  ) {
  }

  public cancelDialog() {
    this.dialogRef.close();
  }

  public createTask() {
    if (this.todoForm.valid) {
      this.dialogRef.close(new TodoItemBo(this.todoForm.value));
    }
  }
}
