import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCartShopping, faUserTie, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faSearch, faHome, faBarcode,faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../services/user.service';
import { faRightFromBracket, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { SharedService } from '../shared/shared.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public searchTerm: string = '';
  path: string = './dekos2.jpg';
  alttext: string = 'LOGO';

  products: any;

  faCartPlus = faCartPlus;
  faUserSecret = faUserSecret;
  faBarcode = faBarcode;
  faHome = faHome;
  faUserTie = faUserTie;
  faSearch = faSearch;
  faRightFromBracket = faRightFromBracket;
  faCircleUser = faCircleUser;
  faCart = faCartShopping;

  constructor(
    private router: Router,
    public userService: UserService,
    private productService: ProductService,
    private cartService: CartService,
    public sharedService: SharedService
  ) {}

  ngOnInit(): void {}

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.productService.search.next(this.searchTerm);
  }

  logout() {
    this.userService.logoutUser();
  }

  backToLogin() {
    this.router.navigateByUrl('login');
  }
  backToRegister() {
    this.router.navigateByUrl('register');
  }
}

