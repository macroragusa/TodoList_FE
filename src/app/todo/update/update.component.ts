import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  checkoutForm;
  todoID: number;

  constructor(
    public todoService: TodoService,
    public formBuilder: FormBuilder,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // get id param
    this.todoID = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    // initialize form
    this.checkoutForm = this.formBuilder.group({
      id: this.todoID,
      title: ''
    });
  }

  updateTodo(jsonTodo): void{
    this.todoService.update(jsonTodo).subscribe((data: Todo) => {
      console.log(data);
      this.checkoutForm.reset();
    });
  }

}
