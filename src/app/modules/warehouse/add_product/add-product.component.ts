import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/product';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../models/category';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  name = '';
  description = '';
  producer = '';
  amount;
  price ;
  category = '';
 public  categories: Category[] = this.categoryService.categories;
  constructor(private  productServise: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
  }
  addProduct() {
    const product: Product = {
      name: this.name,
      description: this.description,
      producer: this.producer,
      amount: this.amount,
      price: this.price,
      category: this.category

    };
    this.productServise.addProduct(product);
    this.name = '';
    this.description = '';
    this.producer = '';
    this.amount = '';
    this.price = '';
    this.category = '';
  }

}
