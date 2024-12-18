import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css'
})
export class ReviewFormComponent {

  isOpen = false;

  rating!: number;
  review!: string;

  @Output()
  onNewReview = new EventEmitter<{ rating: number, review: string }>();


  toggle() {
    this.isOpen = !this.isOpen;
  }

  handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.onNewReview.emit({
      rating: this.rating,
      review: this.review
    });
    this.rating = 0;
    this.review = '';
    this.isOpen = false;
  }

}
