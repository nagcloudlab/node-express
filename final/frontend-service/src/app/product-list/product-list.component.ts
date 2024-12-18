import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('http://localhost:8181/api/products').subscribe((data: any) => {
      this.products = data
      console.log(this.products)
    })
  }

}
