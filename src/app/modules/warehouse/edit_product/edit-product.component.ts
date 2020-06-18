import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product;
  nName;
  nProducer;
  nDescription;
  nPrice;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.product = this.productService.getProduct(params.get('id'));
      this.nName = this.product.name;
      this.nDescription = this.product.description;
      this.nProducer = this.product.producer;
      this.nPrice = this.product.price;
    });
  }
  editProduct() {
    this.productService.editProduct(this.product, this.nName, this.nDescription, this.nProducer, this.nPrice);
    // TODO show message product was edited or you have already had product with name ...
  }

}
