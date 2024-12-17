import { Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

export const routes: Routes = [
    {
        path: '', redirectTo: 'todos', pathMatch: 'full'
    },
    {
        path: 'todos', component: TodosComponent
    },
    {
        path: 'new', component: TodoFormComponent
    }
];
