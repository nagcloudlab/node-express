import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  imports: [
    CommonModule
  ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  todos: Array<any> = [];

  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit() {
    this.todosService.getTodos()
      .subscribe((response) => {
        this.todos = response;
      });
  }

  delete(todo: any) {
    this.todosService.delete(todo.id)
      .subscribe(() => {
        this.todos = this.todos.filter(t => t.id !== todo.id);
      });
  }

}
