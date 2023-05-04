import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {AuthComponent} from './auth/auth.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  {path: '', redirectTo: `products`, pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'categories/:id', component: ProductsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }