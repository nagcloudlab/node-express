import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl = 'http://localhost:5000/api/v1/todos';

  constructor(private httpClient: HttpClient) { }

  getTodos(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  add(todo: any): Observable<any> {
    todo.completed = 0;
    return this.httpClient.post(this.apiUrl, todo);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

}
