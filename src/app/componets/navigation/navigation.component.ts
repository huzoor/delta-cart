import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  categoryList: any = [];
  searchText: any = '';
  @Input() cartItems:any;

  constructor(private productService:ProductsService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.productService.getCategories().subscribe(categories => {
      this.categoryList = categories;
    });
  }

  getProductsByCategory(category: string){
    this.sharedService.setSelectedCategory(category)
  }

  onItemSearch(){
    // this.productsList = this.productsList.filter((item:any) => ((item.description.toLowerCase().indexOf(this.searchText) > -1) || (item.title.toLowerCase().indexOf(this.searchText) > -1) || (item.category.toLowerCase().indexOf(this.searchText) > -1) ))
    console.log('searchText', this.searchText);
    this.sharedService.setSearchTerm(this.searchText);
  }

}
