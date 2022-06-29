import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductsPageComponent } from './products/products-page/products-page.component';
import { RandomUsersPageComponent } from './random-users/random-users-page/random-users-page.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
import { UsersGuard } from './shared/guards/users.guard';

const routes: Routes = [
  {path: "products", component: ProductsPageComponent},
  {path: "products/:id", component: ProductDetailsComponent},
  {path: "users", component: RandomUsersPageComponent, canActivate: [UsersGuard]},
  {path: "welcome", component: WelcomeComponent},
  {path:'', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
