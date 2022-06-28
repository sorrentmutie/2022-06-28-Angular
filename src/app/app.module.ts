import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './products/products-page/products-page.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { NamePipe } from './products/pipes/name.pipe';
import { HeaderProductsPipe } from './products/pipes/header-products.pipe';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    ProductsListComponent,
    NamePipe,
    HeaderProductsPipe,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
