import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './afrom/modules/dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';

import { UiButtonComponent } from './ui-components/ui-button/ui-button.component';
import { UiDatepickerComponent } from './ui-components/ui-datepicker/ui-datepicker.component';
import { UiInputComponent } from './ui-components/ui-input/ui-input.component';
import { UiNumberComponent } from './ui-components/ui-number/ui-number.component';
import { UiPaginationComponent } from './ui-components/ui-pagination/ui-pagination.component';
import { UiSearchComponent } from './ui-components/ui-search/ui-search.component';
import { UiSelectComponent } from './ui-components/ui-select/ui-select.component';
import { UiTextareaComponent } from './ui-components/ui-textarea/ui-textarea.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { MessageComponent } from './components/message/message.component';
import { BulletinTableComponent } from './components/bulletin-table/bulletin-table.component';
import { ControlTableComponent } from './components/control-table/control-table.component';
import { EditBulletinComponent } from './components/edit-bulletin/edit-bulletin.component';
import { DateFormatDirective } from './directives/dateFormat.directive';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BulletinService } from './services/Bulletin.service';
import { UserService } from './services/User.service';
import {DeprApiRequest} from './services/depr.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,

    UiButtonComponent,
    UiDatepickerComponent,
    UiInputComponent,
    UiNumberComponent,
    UiPaginationComponent,
    UiSearchComponent,
    UiSelectComponent,
    UiTextareaComponent,
    ModalWindowComponent,
    MessageComponent,
    BulletinTableComponent,
    ControlTableComponent,
    EditBulletinComponent,
    DateFormatDirective
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    AppRoutingModule,

    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [BulletinService, UserService, DeprApiRequest],
  bootstrap: [AppComponent]
})
export class AppModule { }
