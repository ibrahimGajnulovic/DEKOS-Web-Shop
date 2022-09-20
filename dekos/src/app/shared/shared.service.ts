import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public data:number = 0;
  public categoryID:number = 0;
  public filteredByCategory:any = [];

  constructor() { }

  
}
