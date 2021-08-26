import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {OrdersComponent} from './orders/orders.component';
import {ProductsComponent} from './products/products.component';
import{ProductDetailComponent} from'./product-detail/product-detail.component';
import{PricingComponent} from'./pricing/pricing.component';
import {LocationsComponent} from './locations/locations.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/login/home', component: HomeComponent },
  { path: 'home/login', component: LoginComponent },
  { path: 'home/register', component: RegisterComponent },
  { path: 'vendeur', component: BoardUserComponent },
  { path: 'dashbord', component: DashbordComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-detail/:id', component: ProductDetailComponent }, 
  { path: 'pricing', component: PricingComponent },
  { path: 'locations', component: LocationsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
