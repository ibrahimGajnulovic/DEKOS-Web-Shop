import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { SharedService } from '../shared/shared.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public products: any = [];
  public grandTotal: any = 0;
  public totalItem: any;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private router: Router,
    public sharedService:SharedService,
  ) {}

  ngOnInit(): void {
    this.cartService.getAllCartProducts().subscribe((res) => {
      this.products = res;
      this.totalItem = this.products.length;
      this.sharedService.data = this.totalItem;
      this.products.forEach((el: any) => {
        Object.assign(el, { quantity: 1 });
      });
    });
  }

  removeItem(id: number) {
    this.cartService.deleteCartItem(id).subscribe((res: any) => {
      this.products = res;
      this.cartService.getAllCartProducts().subscribe((res) => {
        this.products = res;
        this.totalItem = this.products.length;
        this.sharedService.data = this.totalItem;
        this.products.forEach((el: any) => {
          Object.assign(el, { quantity: 1 });
        });
      });
    });
  }


  backToProducts() {
    this.router.navigateByUrl('products');
  }

  buy() {
    alert('         Kupljeno!');
  }
}
