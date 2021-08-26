import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { sidebarVendeurComponent } from './sidebarVendeur.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ sidebarVendeurComponent ],
    exports: [ sidebarVendeurComponent ]
})

export class SidebarVendeurModule {}