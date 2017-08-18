import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable }  from 'rxjs/Observable';
import 'rxjs/observable/of';

@Injectable()
export class ApiMockService {

  constructor() { }

  //API: GET /todos
 public getAllTodos(): Observable<Todo[]> {
  return Observable.of([
    new Todo({id: 1, title: 'read article', complete: false})
  ]);
}

  // API: POST /todos
  public createTodo(todo: Todo): Observable<Todo> {
    return Observable.of([
    new Todo({id: 1, title: 'read article', complete: false})
  ]);
  }

  // API: GET /todos/:id
  public getTodoById(todoId: number): Observable<Todo> {
    return Observable.of([
    new Todo({id: 1, title: 'read article', complete: false})
  ]);
  }

  // API: PUT /todos/:id
  public updateTodo(todo: Todo): Observable<Todo> {
    return Observable.of([
    new Todo({id: 1, title: 'read article', complete: false})
  ]);
  }

  // DELETE /todos/:id
  public deleteTodoById(todoId: number): Observable<null> {
    return null;
  }

}
