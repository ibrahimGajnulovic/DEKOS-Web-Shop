import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../models/Product.class';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['./get-all-products.component.scss'],
})
export class GetAllProductsComponent implements OnInit {
  allProducts: any = [];
  product: Product = {} as Product;
  image: string = '';
  

  constructor(
    private productService: ProductService,
    private dialogRef: MatDialog,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((response: any) => {
      this.allProducts = response;
      this.allProducts.forEach((el:any) => {
        this.productService.getAllProductImages(el.id).subscribe((images:any) => {
          el['image'] = images;
        })
      });
    });
  }

  openPopUp(id:number) {
    this.dialogRef.open(PopUpComponent, {
      data: {
        product_id : id
      },
    });
  }

  
}
