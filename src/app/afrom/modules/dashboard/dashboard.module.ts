import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import {LocalityModule} from '../locality/locality.module';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardMenuComponent} from './dashboard-menu/dashboard-menu.component';
import {DashboardMenuItemComponent} from './dashboard-menu-item/dashboard-menu-item.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMenuComponent,
    DashboardMenuItemComponent,
  ],
  imports: [
    BrowserModule,
    DashboardRoutingModule,
    LocalityModule,
  ],
  exports: [

  ],
  providers: [],
  bootstrap: []
})
export class DashboardModule { }
