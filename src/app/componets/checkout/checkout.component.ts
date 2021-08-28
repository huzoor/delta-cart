import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  data!: any;
  routeState: any;
  addShopFormGroup!: FormGroup;
  constructor(private sharedService:SharedService, private router: Router) { }

  ngOnInit(): void {
    if (this.router?.getCurrentNavigation()?.extras.state) {
      this.routeState = this.router?.getCurrentNavigation()?.extras.state;
      if (this.routeState) {
        console.log('this.routeState',this.routeState)
      }
    }

    this.addShopFormGroup = new FormGroup({
      firstName : new FormControl('', [Validators.required]),
      LastName : new FormControl('', [Validators.required]),
      shopAddress : new FormControl('', [Validators.required])
    });

  }

  checkError (controlName: string, errorName: string){
    return this.addShopFormGroup.controls[controlName].hasError(errorName);
  }

  onSubmit(){
    console.log('addShopFormGroup',this.addShopFormGroup)
  }
}
