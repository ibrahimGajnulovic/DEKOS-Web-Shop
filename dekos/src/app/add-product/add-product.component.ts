import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../models/Category.class';
import { Product } from "../models/Product.class";
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  product:Product = {} as Product;
  allCategories:any = [];
  products:any = []
  
  

  constructor(private categoryService:CategoryService, private productService:ProductService, private toast:ToastrService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe((response:Category) => {
      this.allCategories = response;
    })
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe((response:any)=>{
      this.products = response;
    })
  }

  

  saveProduct(e:any) {
    e.preventDefault();
    this.productService.insertProduct(this.product).subscribe((response:any) => {
      this.toast.success(response);
      location.reload();
      /* this.getAllProducts(); */
    })
  }


}
