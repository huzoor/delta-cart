import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'category', 'image', 'price'];
  dataSource: any[] = [];
  cartTotal: number = 0;
  constructor(private sharedService: SharedService, public dialogRef: MatDialogRef<CartSummaryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.dataSource = this.data.cartItems;
    this.data.cartItems.forEach((item:any) => {
      this.cartTotal += parseInt(item.price,0)
    });
    console.log(this.cartTotal)
  }

  onBtnClick(type: string){
    this.dialogRef.close({cartData: this.data, type})
  }

}
