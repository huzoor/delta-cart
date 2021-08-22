import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartSummaryComponent } from './componets/cart-summary/cart-summary.component';
import { ProductsComponent } from './componets/products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart-summary', component: CartSummaryComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
