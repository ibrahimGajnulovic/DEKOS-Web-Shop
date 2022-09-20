import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category.class';
import { CategoryService } from '../services/category.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService,public sharedService:SharedService) {}

  ngOnInit(): void {
    this.getCategories();
  }


  getCategories() {
    this.categoryService.getAllCategories().subscribe((response: any) => {
      this.categories = response;
    });
  }

  filterByCategory(id:number) {
    this.sharedService.categoryID = id;
    
    this.categoryService.filterByCategory(id).subscribe((response:any)=> {
      this.sharedService.filteredByCategory = response;
      console.log(response)
    }) 
  }
}
