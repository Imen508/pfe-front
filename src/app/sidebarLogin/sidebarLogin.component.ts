import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-shop',       class: '' },
    { path: '/orders',         title: 'Orders',        icon:'nc-layout-11',    class: '' },
    { path: '/Pricing',         title: 'Pricing',        icon:'nc-money-coins',    class: '' },
    { path: '/Inventory',         title: 'Inventory',        icon:'nc-app',    class: '' },
    { path: '/locations',         title: 'Locations',        icon:'nc-map-big',    class: '' },

];

@Component({
  selector: 'app-sidebarLogin',
  templateUrl: './sidebarLogin.component.html',
  styleUrls: ['./sidebarLogin.component.css']
})


export class sidebarLoginComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
