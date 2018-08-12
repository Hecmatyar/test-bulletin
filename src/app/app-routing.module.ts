import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import {DashboardComponent} from './afrom/modules/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'prev', component: MainComponent },
  {path: '', component: DashboardComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
