import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { pipe } from 'rxjs';
import { Product } from '../models/Product.class';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  allProducts: any = [];
  product: any = {} as Product;
  image: string = '';
  selectedCategoryId: any = '9';

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }



  getAllProducts() {
    this.productService.getAllProducts().subscribe((response: any) => {
      this.allProducts = response;
      this.allProducts.forEach((el: any) => {
        this.productService
          .getAllProductImages(el.id)
          .subscribe((images: any) => {
            el['image'] = images;
          });
      });
    });
  }
}
