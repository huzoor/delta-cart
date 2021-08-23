import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  data: any = {};
  routeState: any;
  constructor(private sharedService:SharedService, private router: Router) { }

  ngOnInit(): void {
    if (this.router?.getCurrentNavigation()?.extras.state) {
      this.routeState = this.router?.getCurrentNavigation()?.extras.state;
      if (this.routeState) {
        console.log('this.routeState',this.routeState)
      }
    }
  }

}
