import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ReviewComponent } from "../review/review.component";
import { ReviewFormComponent } from "../review-form/review-form.component";

@Component({
  selector: 'app-product',
  imports: [
    CommonModule,
    ReviewComponent,
    ReviewFormComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input()
  product: any = {}

  currentTab = 1

  reviews = []

  constructor(
    private http: HttpClient
  ) { }

  handleNewReview(review: { rating: number, review: string }) {
    this.http.post(`http://localhost:8181/api/products/${this.product._id}/reviews`, review)
      .subscribe(() => {
        this.loadReviews()
        this.currentTab = 3
      })
  }

  changeTab(tabIndex: number) {
    this.currentTab = tabIndex
    if (this.currentTab === 3) {
      this.loadReviews()
    }
  }

  loadReviews() {
    this.http.get<any[]>(`http://localhost:8181/api/products/${this.product._id}/reviews`)
      .subscribe((reviews: any) => {
        this.reviews = reviews
        console.log(this.reviews);
      })
  }

  isTabSelected(tabIndex: number) {
    return this.currentTab === tabIndex
  }

}
