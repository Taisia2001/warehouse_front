import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  name = 'hereWillBe name';
  description = 'here will be d';
  producer = 'here will be p';
  amount;
  price ;
  category = 'here will be c';
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  editProduct() {
    const product: Product = {
      name: this.name,
      description: this.description,
      producer: this.producer,
      amount: this.amount,
      price: this.price,
      category: this.category

    };
    this.productService.editProduct(product);
    this.name = '';
    this.description = '';
    this.producer = '';
    this.amount = '';
    this.price = '';
    this.category = '';
  }

}
