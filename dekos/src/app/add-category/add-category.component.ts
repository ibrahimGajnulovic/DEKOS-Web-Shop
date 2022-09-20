import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../models/Category.class';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {

  category:Category = {} as Category;

  constructor(private categoryService:CategoryService, private toast:ToastrService) {}

  ngOnInit(): void {}

  saveCategory(event:Event) {
    event.preventDefault();
    this.categoryService.insertCategory(this.category).subscribe((response:any)=> {
      this.toast.success(response);
      location.reload();
    })


  }
}
