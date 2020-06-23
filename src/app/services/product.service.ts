import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class ProductService {
  constructor(private http: HttpClient) {}

getProducts() {
  const auth = localStorage.getItem('auth');
  const he = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('authorization_token', auth);
  return this.http.get('http://localhost:8080/api/show/goods',  {headers: he, observe: 'response'} );
}
removeProduct(id: number) {
  const auth = localStorage.getItem('auth');
  const he = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('authorization_token', auth);
  this.http.delete('http://localhost:8080/api/good/' + id, {headers: he, observe: 'response'}).subscribe((response) => {
      alert('Product was successfully deleted');
    }, error => {
      alert(error.statusText);
    });
  }
  addProduct(pName, pDescription, pProducer, pAmount, pPrice, pCategoryId) {
    // alert('Mistake! You have already had category with name ' + name);
    // alert("Product was succesfully created");
    const auth = localStorage.getItem('auth');
    const he = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('authorization_token', auth);
    this.http.put('http://localhost:8080/api/good', {amount: pAmount, category: pCategoryId, description: pDescription,
       name: pName[0].toUpperCase() + pName.slice(1), price: pPrice, producer: pProducer},
      {headers: he, observe: 'response'}).subscribe((response) => {
      alert('Product successfully created');
    }, error => {
            alert(error.statusText);
    });
  }
  editProduct(product: Product, nName, nDescription, nProducer, nPrice, nAmount) {
    const auth = localStorage.getItem('auth');
    const he = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('authorization_token', auth);
    this.http.post('http://localhost:8080/api/good',
      {amount: nAmount, category: product.category, description: nDescription,
      id: product.id, name: nName[0].toUpperCase() + nName.slice(1), price: nPrice, producer: nProducer},
      {headers: he, observe: 'response'}).subscribe((response) => {
      alert('Product was successfully edited!');
    }, error => {
        alert(error.statusText);
    });


  }
  getProduct(productId) {
    const auth = localStorage.getItem('auth');
    const he = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('authorization_token', auth);
    return this.http.get('http://localhost:8080/api/show/good/' + productId, {headers: he, observe: 'response'});
  }
}
