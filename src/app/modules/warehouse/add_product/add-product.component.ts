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

  nName = '';
  nDescription = '';
  nProducer = '';
  nAmount;
  nPrice ;
  categoryId = '';
  categoryName;
 public  categories: Category[] = this.categoryService.getCaregories();
  constructor(private  productServise: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  setId(id) {
    this.categoryId = id;
    this.categoryName = this.categoryService.getCategory(id).name;
  }
  addProduct() {
    // TODO message add or not
    this.productServise.addProduct(this.nName, this.nDescription, this.nProducer, this.nAmount, this.nPrice, this.categoryId, this.categoryName);
    this.nName = '';
    this.nDescription = '';
    this.nProducer = '';
    this.nAmount = '';
    this.nPrice = '';
    this.categoryId = '';
  }

}
