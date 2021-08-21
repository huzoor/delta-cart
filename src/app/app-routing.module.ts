import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { ProductsComponent } from './componets/products/products.component';
import { ProductsListingComponent } from './componets/products-listing/products-listing.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'products-listing', component: ProductsListingComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
