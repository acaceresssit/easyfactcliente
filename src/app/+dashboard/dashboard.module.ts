import {NgModule} from '@angular/core';

import {SmartadminModule} from '../shared/smartadmin.module'

import {routing} from './dashboard.routing';
import {ComprobantesElectronicosComponent} from "./+comprobantes-electronicos/comprobantes-electronicos.component";
import {CalendarModule, DataTableModule, DialogModule, SharedModule} from "primeng/primeng";
import {DropdownModule} from 'primeng/primeng';

@NgModule({
  imports: [
    SmartadminModule,
    routing,
    DropdownModule,
    CalendarModule,
    DataTableModule,
    SharedModule,
    DialogModule
  ],
  declarations: [ComprobantesElectronicosComponent],
  providers: [],
})
export class DashboardModule {

}
