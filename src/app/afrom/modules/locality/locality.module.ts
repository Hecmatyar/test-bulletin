import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {LocalityRoutingModule} from './locality-routing.module';
import {LocalityListComponent} from './locality-list/locality-list.component';
import {LocalityAdditionComponent} from './locality-addition/locality-addition.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import {BaseListComponent} from '../../common/base-list/base-list.component';
import {PaginationComponent} from '../../common/pagination/pagination.component';
import {HeaderFilterComponent} from '../../common/header-filter/header-filter.component';
import {SearchStoppingListComponent} from '../../common/search-stoping-list/search-stopping-list.component';
import {SearchStoppingItemComponent} from '../../common/search-stopping-item/search-stopping-item.component';
import {MapComponent} from '../../common/map/map.component';
import {ButtonComponent} from '../../common/button/button.component';
import {AutoCompleteComponent} from '../../common/autocomplete/auto-complete.component';
import {LocalityComponent} from './locality/locality.component';
import {SelectComponent} from '../../common/select/select.component';

@NgModule({
  declarations: [
    LocalityComponent,
    LocalityListComponent,
    LocalityAdditionComponent,
    BaseListComponent,
    PaginationComponent,
    HeaderFilterComponent,
    SearchStoppingListComponent,
    SearchStoppingItemComponent,
    MapComponent,
    ButtonComponent,
    AutoCompleteComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    LocalityRoutingModule,
    PaginationModule.forRoot(),
  ],
  exports: [
    LocalityComponent,
    LocalityListComponent,
    LocalityAdditionComponent,
  ],
  providers: [],
  bootstrap: []
})
export class LocalityModule { }
