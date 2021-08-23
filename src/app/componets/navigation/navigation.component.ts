import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  categoryList: any = [];
  cartItems: any = []
  constructor(private productService:ProductsService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.productService.getCategories().subscribe(categories => {
      this.categoryList = categories;
    });
  }

  getProductsByCategory(category: string){
    this.sharedService.setSelectedCategory(category)
  }

}
