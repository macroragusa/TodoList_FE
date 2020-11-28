import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  todo: Todo;
  todoID: string;

  constructor(
    public todoService: TodoService,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // get id param
    this.todoID = this.route.snapshot.paramMap.get('id');
    this.infoTodo(this.todoID);
  }

  infoTodo(id): void {
    this.todoService.getById(id).subscribe((data: Todo) => {
      console.log(data);
      this.todo = data;
    });
  }

}
