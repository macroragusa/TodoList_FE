import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiServer = 'http://localhost:3000';
  private todoServicePath = '/api/v1/todos/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  add(todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.apiServer + this.todoServicePath, JSON.stringify(todo), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getById(id): Observable<Todo> {
    return this.httpClient.get<Todo>(this.apiServer + this.todoServicePath + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiServer + this.todoServicePath)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(jsonTodo): Observable<Todo> {
    return this.httpClient.patch<Todo>(this.apiServer + this.todoServicePath + jsonTodo.id, jsonTodo, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  delete(id): Observable<Todo> {
    return this.httpClient.delete(this.apiServer + this.todoServicePath + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error): Observable<any> {
    let errorMessage: any;
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
