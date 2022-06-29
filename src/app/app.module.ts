import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './products/products-page/products-page.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { NamePipe } from './products/pipes/name.pipe';
import { HeaderProductsPipe } from './products/pipes/header-products.pipe';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { RandomUsersPageComponent } from './random-users/random-users-page/random-users-page.component';
import { FirstInterceptor } from './shared/interceptors/first.interceptor';
import { SecondInterceptor } from './shared/interceptors/second.interceptor';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    ProductsListComponent,
    NamePipe,
    HeaderProductsPipe,
    ProductDetailsComponent,
    RandomUsersPageComponent,
    WelcomeComponent,
    NotFoundComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FirstInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: SecondInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
