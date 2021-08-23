import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private cartItem = new BehaviorSubject<any>({});
  sharedCartItem = this.cartItem.asObservable();
 
  private finalCartItems = new BehaviorSubject<any>([]);
  sharedFinalCartItems = this.cartItem.asObservable();
 
  private selectedCategory = new BehaviorSubject('');
  sharedSelectedCategory = this.selectedCategory.asObservable();

  constructor() { }

  setCartItem(product: any) {
    this.cartItem.next(product)
  }
 
  setSelectedCategory(category: any) {
    this.selectedCategory.next(category)
  }

  setFinalCartItems(cartItems:any){
    this.finalCartItems.next(cartItems)
  }
}
