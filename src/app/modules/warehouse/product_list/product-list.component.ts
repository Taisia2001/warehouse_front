import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/product';
import {CategoryService} from '../../../services/category.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
changedProduct: Product = {id: 1, name: 'bread', description: 'd', price: 5, producer: 'me', amount: 2, categoryName: 'food'};
change;
category;
title;
products: Observable<any>;
total = 0;
search = '';
  constructor(public productService: ProductService, private categoryService: CategoryService, private route: ActivatedRoute ) { }

  async ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = this.categoryService.getCategory(params.get('id'));
    });
    if (this.category) {
      this.title = this.category.name;
      // TODO change to id later
      // this.products = this.productService.getProductsByCategory(this.category.name);
    } else {
      this.title = 'All products';
      this.products = this.productService.getProducts();
      console.log(this.products);
    }
    this.products.pipe(
      map(items => items)
    )
      .subscribe(data => {
        for (const p of data) {
          this.total += p.price;
        }
        this.total = this.total.toFixed(2);
      });


  }
  prodModal(item: Product) {
    console.log(this.change);
    this.changedProduct = item;
    this.change = 0;
  }
  changeAmount() {
    this.changedProduct.amount += this.change;
   }
  removeProduct(productId) {
    this.productService.removeProduct(productId);
    // this.products = this.productService.getProducts();
  }
  newSearch(str) {
    this.search = str;
  }
  reset() {
    this.search = '';
  }

}
