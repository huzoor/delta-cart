import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material-module';
import { ProductsComponent } from './componets/products/products.component';
import { NavigationComponent } from './componets/navigation/navigation.component';
import { ProductsListingComponent } from './componets/products-listing/products-listing.component';
import { HeaderNavComponent } from './componets/header-nav/header-nav.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavigationComponent,
    ProductsListingComponent,
    HeaderNavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
