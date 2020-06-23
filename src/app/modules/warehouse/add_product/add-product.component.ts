import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/product';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../models/category';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  nName = '';
  nDescription = '';
  nProducer = '';
  nAmount;
  nPrice ;
  categoryId = '';
  categories;
  constructor(private  productServise: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
     this.categoryService.getCaregories().subscribe(data => {
      this.categories = new Observable(observer => observer.next(data.body));
    });
  }

setId(id){
    this.categoryId = id;
  }
addProduct() {
    // TODO message add or not
    this.productServise.addProduct(this.nName, this.nDescription, this.nProducer,
      this.nAmount, this.nPrice, this.categoryId);
    this.nName = '';
    this.nDescription = '';
    this.nProducer = '';
    this.nAmount = '';
    this.nPrice = '';
    this.categoryId = '';
  }

}
