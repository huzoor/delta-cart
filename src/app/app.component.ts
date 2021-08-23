import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { CartSummaryComponent } from './componets/cart-summary/cart-summary.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'delta-cart';

  cartItems: any = [];
  constructor(private sharedService: SharedService, private toastr: ToastrService, public dialog: MatDialog, private router:Router) { }

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

  openCartDialog() {

    const dialogRef = this.dialog.open(CartSummaryComponent, {
      width: '800px',
      data: {cartItems: this.cartItems},
      disableClose: true 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result && result.type && result.type === 'checkout'){
        this.sharedService.setFinalCartItems(result.cartData);
        this.router.navigate(['/checkout'], {
          state: {
            cartItems: JSON.stringify(result.cartData)
          }
        });
      }
    });

  }

}
