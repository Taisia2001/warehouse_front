import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({providedIn: 'root'})
export class ProductService {
  private products: Product[];
  constructor(private http: HttpClient) {}

getProducts() {
  const auth = localStorage.getItem('auth');
  const he = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('authorization_token', auth.substring(1, auth.length - 1));
  return this.http.get('http://localhost:8080/api/show/goods',  {headers: he} );
}
removeProduct(id: number) {
  const auth = localStorage.getItem('auth');
  const he = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('authorization_token', auth.substring(1, auth.length - 1));
    this.http.delete('http://localhost:8080/api/good/' + id, {headers: he}).subscribe((response: Response) => {
      //alert(response);
      console.log(response);
    });
  }
  addProduct(pName, pDescription, pProducer, pAmount, pPrice, pCategoryId) {
    //alert('Mistake! You have already had category with name ' + name);
    // alert("Product was succesfully created");
    const auth = localStorage.getItem('auth');
    const he = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('authorization_token', auth.substring(1, auth.length - 1));
    this.http.put('http://localhost:8080/api/good', {amount: pAmount, category: pCategoryId, description: pDescription,
       name: pName, price: pPrice, producer: pProducer}, {headers: he}).subscribe((response: Response) => {
      const product = response;
      console.log(product);
    });
  }
  editProduct(product: Product, nName, nDescription, nProducer, nPrice, nAmount) {
    const auth = localStorage.getItem('auth');
    const he = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('authorization_token', auth.substring(1, auth.length - 1));
    this.http.post('http://localhost:8080/api/good',
      {amount: nAmount, category: product.category, description: nDescription,
      id: product.id, name: nName, price: nPrice, producer: nProducer},
      {headers: he}).subscribe((response: Response) => {
      const p = response;
      console.log(p);
    });
    //alert('Mistake! You have already had product with name ' + name);
    // alert("Product was succesfully edited");


  }
  getProduct(productId) {
    const auth = localStorage.getItem('auth');
    const he = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('authorization_token', auth.substring(1, auth.length - 1));
    return this.http.get('http://localhost:8080/api/show/good/' + productId, {headers: he});
  }
}
