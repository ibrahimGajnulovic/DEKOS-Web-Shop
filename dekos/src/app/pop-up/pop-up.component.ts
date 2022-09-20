import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Product_image } from '../models/Product-image.class';
import { Product } from '../models/Product.class';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent implements OnInit {
  image: any = {};
  product: any = {};

  

  saveProductImage(id: number, image:string) {
    this.productService
      .insertProductImage({ productId: id, image })
      .subscribe((response: any) => {
        this.toast.success(response);
        location.reload();
      });
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private productService: ProductService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {}
}
