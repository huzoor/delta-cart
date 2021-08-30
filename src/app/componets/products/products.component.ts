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
  productsListFull: any = [];
  searchText: any = '';
  constructor(private productService:ProductsService ,private sharedService: SharedService ) { }

  ngOnInit(): void {
    this.sharedService.sharedSelectedCategory.subscribe( category => {
      if(this.selectedCategory !== category){
        this.selectedCategory = category;
        this.productService.getProductsByCategory(category).subscribe(products => {
          this.productsList = products;
          this.productsListFull = products;
        })
      }
    });

    this.sharedService.sharedSearchTerm.subscribe(term => {
      if(term){
        this.onItemSearch(term)
      }
    })
    
    this.productService.getProducts().subscribe(products => {
      this.productsList = products;
      this.productsListFull = products;
    })
  }

  addItemToCart(product:any){
    this.sharedService.setCartItem(product)
  }

  onItemSearch(term){
    this.productsList = this.productsList.filter((item:any) => ((item.description.toLowerCase().indexOf(term) > -1) || (item.title.toLowerCase().indexOf(term) > -1) || (item.category.toLowerCase().indexOf(term) > -1) ))
    console.log('searchText', term, this.productsList);
  }

  onClearSelection(){
    this.searchText = '';
    this.productsList = [...this.productsListFull]

  }

}
