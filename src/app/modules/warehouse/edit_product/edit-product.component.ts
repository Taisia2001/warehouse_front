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
       this.productService.getProduct(params.get('id')).pipe(
      ).subscribe(data => {
         this.temp = data;
         if (this.temp) {
           this.product = this.temp;
           this.nName = this.product.name;
           this.nDescription = this.product.description;
           this.nProducer = this.product.producer;
           this.nPrice = this.product.price;
           this.nPrice = parseFloat(this.nPrice.toFixed(2));
         } else {
           //TODO ловить 404
           this.router.navigate(['products']);
         }
      });
    });
  }
  editProduct() {
    this.productService.editProduct(this.product, this.nName, this.nDescription, this.nProducer, this.nPrice, this.product.amount);
    // TODO show message product was edited or you have already had product with name ...
  }

}
