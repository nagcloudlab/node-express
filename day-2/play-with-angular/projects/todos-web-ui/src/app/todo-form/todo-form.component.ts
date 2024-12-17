import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TodosService } from '../todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {

  todoForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      title: '',
    })
  }

  onSubmit() {
    console.log('Form submitted', this.todoForm.value)
    this.todoService.add(this.todoForm.value)
      .subscribe((response) => {
        console.log('Response from server', response)
        this.router.navigate(['/todos'])
      })
  }

}
