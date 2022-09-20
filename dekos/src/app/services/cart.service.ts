import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  constructor(private httpClient: HttpClient) {}

  addProductToCart(product: any, UserId: any) {
    const api = environment.serverUrl + '/cart/all';
    const data = {
      ...product,
      UserId: UserId,
      productId: product.id,
      status: 'IN_CART',
    };
    return this.httpClient.post<string>(api, data);
  }

  getAllCartProducts() {
    const api = environment.serverUrl + '/cart/all';
    return this.httpClient.get(api);
  }

  deleteCartItem(id: any) {
    const api = environment.serverUrl + '/cart/delete/' + id;
    return this.httpClient.delete(api);
  }

  deleteAllItems() {
    const api = environment.serverUrl + '/cart/delete/all';
    return this.httpClient.delete(api);
  }
  
  
}
