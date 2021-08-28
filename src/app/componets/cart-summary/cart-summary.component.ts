import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'category', 'image', 'price', 'action'];
  dataSource: any[] = [];
  tableItems: any[] = [];
  cartTotal: number = 0;
  constructor(private sharedService: SharedService, public dialogRef: MatDialogRef<CartSummaryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.tableItems = this.data.cartItems;
    this.dataSource = [...this.tableItems];
    this.calculateTotal();
  }

  onBtnClick(type: string){
    this.dialogRef.close({cartData: this.data, type})
  }

  removeItem(item:any){
    if(item && item.id){
      this.tableItems = this.tableItems.filter((product:any) => product.id !== item.id);
      this.dataSource = [...this.tableItems];
      this.sharedService.removeCartItem(item.id)
      this.calculateTotal();
    }
  }

  calculateTotal(){
    this.cartTotal = 0;
    this.tableItems.forEach((item:any) => {
      this.cartTotal += parseInt(item.price,0)
    });
  }

}
