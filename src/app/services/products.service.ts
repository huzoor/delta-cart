import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    const url = `https://fakestoreapi.com/products`;
    return this.http.get(url);
  }
 
  getProductsByCategory(category:string): Observable<any> {
    const url = `https://fakestoreapi.com/products/category/${category}`;
    return this.http.get(url);
  }
  
  getCategories(): Observable<any> {
    const url = `https://fakestoreapi.com/products/categories`;
    return this.http.get(url);
  }
}
