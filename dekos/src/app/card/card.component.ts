import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/Product.class';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';
import { SharedService } from '../shared/shared.service';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  searchKey: string = '';
  public filterCategory: any;
  selectedIndex: any = 0;
  allProducts: any = [];
  product: Product = {} as Product;
  image: string = '';
  public totalItem: any;
  products: any = [];

  faCartPlus = faCartPlus;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private toastr: ToastrService,
    private userService: UserService,
    public sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.cartLenght();

    this.productService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((response: any) => {
      this.allProducts = response;
      this.filterCategory = response;
      this.allProducts.forEach((el: any) => {
        this.productService
          .getAllProductImages(el.id)
          .subscribe((images: any) => {
            el['image'] = images;
          });
      });
      this.allProducts.forEach((el: any) => {
        Object.assign(el, { quantity: 1, total: el.price });
      });
    });
  }

  filter(category: string) {
    this.filterCategory = this.allProducts.filter((a: any) => {
      if (a.category == category || category === '') {
        return a;
      }
    });
  }

  cartLenght() {
    this.cartService.getAllCartProducts().subscribe((res) => {
      this.products = res;
      this.totalItem = this.products.length;
      this.sharedService.data = this.totalItem;
    });
  }

  addToCart(product: any) {
    const UserId = this.userService.loggedUser.id;
    
      
    this.cartService
      .addProductToCart(product, UserId)
      .subscribe((response: any) => {
        this.cartLenght();
        this.toastr.success(response);
      });
    
  }
}
