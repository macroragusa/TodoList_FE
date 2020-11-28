import { Component, OnInit } from '@angular/core';

import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todos: Todo[] = [];

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
    this.listTodo();
  }

  listTodo(): void{
    this.todoService.getAll().subscribe((data: Todo[]) => {
      this.todos = data;
    });
  }

  delete(id): void {
    this.todoService.delete(id).subscribe((data: Todo) => {
      console.log(data);
      this.listTodo();
    });
  }

  completed(jsonTodo): void {
    this.todoService.update(jsonTodo).subscribe((data: Todo) => {
      console.log(data);
      this.listTodo();
    });
  }
}
