import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {OrdersComponent} from './orders/orders.component';
import {ProductsComponent} from './products/products.component';
import{ProductDetailComponent} from'./product-detail/product-detail.component';
import{PricingComponent} from'./pricing/pricing.component';
import {LocationsComponent} from './locations/locations.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashbordComponent} from './dashbord/dashbord.component'
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { sidebarLoginComponent } from './sidebarLogin/sidebarLogin.component';
import { sidebarVendeurComponent } from './sidebarVendeur/sidebarVendeur.component';
import { NavbarComponent } from './shared/navbar/navbar.component';



import { DataTablesModule } from 'angular-datatables';



 
import { FullCalendarModule } from '@fullcalendar/angular'; 
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
 

FullCalendarModule.registerPlugins([ 
  interactionPlugin,
  dayGridPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    sidebarLoginComponent,
    sidebarVendeurComponent,
    OrdersComponent,
    PricingComponent,
    DashbordComponent,
    ProductDetailComponent,
    LocationsComponent,
    ProductsComponent,
    BoardUserComponent,
         SidebarComponent,
         NavbarComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    CarouselModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
