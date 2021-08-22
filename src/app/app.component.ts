import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'delta-cart';

  cartItems: any = [];
  constructor(private sharedService: SharedService, private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.sharedService.sharedCartItem.subscribe(product => {
      if (product && product.id) {
        const isProductExists = this.cartItems.find((item: any) => item.id == product.id)
        if (isProductExists)
          this.toastr.warning('Item Already Exists!');
        else this.cartItems.push(product)
      }

      console.log('this.cartItems', this.cartItems)
    });
  }
}
