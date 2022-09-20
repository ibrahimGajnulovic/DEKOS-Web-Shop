import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../models/Category.class';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  getAllCategories() {
    const api = environment.serverUrl + '/category/all';
    return this.httpClient.get<Category>(api);
  }

  deleteCategory(id: any) {
    const api = environment.serverUrl + '/category/delete/' + id;
    return this.httpClient.delete<Category>(api);
  }

  insertCategory(category: Category) {
    const api = environment.serverUrl + '/category';
    return this.httpClient.post(api, category);
  }

  filterByCategory(id:number) {
    const api = environment.serverUrl + '/category/filter/' + id;
    return this.httpClient.get(api);
  }
}
