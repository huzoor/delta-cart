import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { SharedService }from 'src/app/services/shared.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {
  selectedCategory: string = '';
  productsList: any = [];
  constructor(private productService:ProductsService ,private sharedService: SharedService ) { }

  ngOnInit(): void {
    this.sharedService.sharedSelectedCategory.subscribe( category => {
      if(this.selectedCategory !== category){
        this.selectedCategory = category;
        this.productService.getProductsByCategory(category).subscribe(products => {
          this.productsList = products;
        })
      }
    });
    
    this.productService.getProducts().subscribe(products => {
      this.productsList = products;
    })
  }

  addItemToCart(product:any){
    this.sharedService.setCartItem(product)
  }

}
