import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product = {id: 1, name: 'bread', description: 'd', price: 5, producer: 'me', amount: 2, categoryName: 'food'};
  temp;
  nName;
  nProducer;
  nDescription;
  nPrice;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.temp = this.productService.getProduct(params.get('id'));
      if (this.temp) {
      this.product = this.temp;
      this.nName = this.product.name;
      this.nDescription = this.product.description;
      this.nProducer = this.product.producer;
      this.nPrice = this.product.price;
      } else {
        this.router.navigate(['products']);
      }
    });
  }
  editProduct() {
    this.productService.editProduct(this.product, this.nName, this.nDescription, this.nProducer, this.nPrice);
    // TODO show message product was edited or you have already had product with name ...
  }

}
