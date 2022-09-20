import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product_image } from '../models/Product-image.class';
import { Product } from '../models/Product.class';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  public search = new BehaviorSubject<string>("");

  insertProduct(product:Product) {
    const api = environment.serverUrl + '/product';
    return this.httpClient.post(api, product);
  }
  insertProductImage(product:any) {
    const api = environment.serverUrl + '/product-image';
    return this.httpClient.post(api, product);
  }

  getAllProducts(){
    const api = environment.serverUrl + '/product/all';
    return this.httpClient.get(api);
  }
  getAllProductImages(id:number){
    const api = environment.serverUrl + '/product-image/all/' + id;
    return this.httpClient.get(api);
  }
}
