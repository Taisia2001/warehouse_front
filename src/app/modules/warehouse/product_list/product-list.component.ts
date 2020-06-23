import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/product';
import {CategoryService} from '../../../services/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {FilterPipe} from '../../shared/filter.pipe';

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
products;
total = 0;
search = '';
access;
  constructor(private productService: ProductService, private categoryService: CategoryService, private route: ActivatedRoute, private filterPipe: FilterPipe, private router: Router) { }
  countTotal() {
    this.total = 0;
    this.products.pipe(
    ).subscribe(data => {
      for (const p of data) {
        this.total += (p.price * p.amount);
      }
      this.total = parseFloat(this.total.toFixed(2));
    });
  }
  ngOnInit() {
    this.updateProducts();
    const r = localStorage.getItem('role');
    this.access = r === 'SuperAdmin' || r === 'Admin';
  }
  updateProducts() {
    this.route.paramMap.subscribe(params => {
      this.category = this.categoryService.getCategory(params.get('id'));
      if (this.category) {
        this.category.pipe().subscribe(res => {
          this.title = res.body.name;
          this.products = new Observable(observer => observer.next(res.body.products));
          this.countTotal();
        }, err => {
          this.router.navigate(['products']);
          alert(err.statusText);
        });
      } else {
        this.title = 'All products';
        this.productService.getProducts().subscribe(res => {
          this.products = new Observable(observer => observer.next(res.body));
          this.countTotal();
        });
      }
    });
  }
  prodModal(item: Product) {
    this.changedProduct = item;
    this.change = 0;
  }
  changeAmount() {
    this.productService.editProduct(this.changedProduct, this.changedProduct.name, this.changedProduct.description,
      this.changedProduct.producer, this.changedProduct.price, this.changedProduct.amount + this.change);
    this.changedProduct.amount += this.change;
    this.change = 0;
   }
  removeProduct(productId) {
    this.productService.removeProduct(productId);
    this.updateProducts();
  }
  newSearch(str) {
    this.search = str;
    this.products.pipe(
   ).subscribe(data => {
     this.total = 0;
     for (const p of this.filterPipe.transform(data, this.search)) {
        this.total += (p.price * p.amount);
      }
     this.total = parseFloat(this.total.toFixed(2));
   });

  }
  reset() {
    this.search = '';
    this.countTotal();
  }

}
