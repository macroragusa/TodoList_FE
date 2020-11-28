import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  todo: Todo;
  checkoutForm;

  constructor(
    public todoService: TodoService,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      title: ''
    });
  }

  addTodo(todo): void{
    this.todoService.add(todo).subscribe((data: Todo) => {
      console.log(data);
      this.checkoutForm.reset();
    });
  }

}
