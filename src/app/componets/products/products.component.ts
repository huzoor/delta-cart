import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService:ProductsService ) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products => {
      console.log('products', products)
    })
  }

}
