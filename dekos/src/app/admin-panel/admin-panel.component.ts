import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit {
  constructor(private cartService:CartService,public sharedService:SharedService) {}

  products:any = []
  totalItem:any = []

  ngOnInit(): void {
    this.cartLenght();
  }

  cartLenght() {
    this.cartService.getAllCartProducts().subscribe((res) => {
      this.products = res;
      this.totalItem = this.products.length;
      this.sharedService.data = this.totalItem;
    });
  }
}
