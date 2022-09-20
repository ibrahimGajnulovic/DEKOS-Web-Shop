import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { Category } from '../models/Category.class';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-get-all-categories',
  templateUrl: './get-all-categories.component.html',
  styleUrls: ['./get-all-categories.component.scss'],
})
export class GetAllCategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService, private toastr:ToastrService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe((response: any) => {
      this.categories = response;
    });
  }

  deleteCategory(id:any) {
    this.categoryService.deleteCategory(id).subscribe((response:any)=> {
      this.categories = response;
      location.reload();
    })
  }

  
}
