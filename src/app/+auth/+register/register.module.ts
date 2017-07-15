import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterRoutingModule} from './register-routing.module';
import {RegisterComponent} from './register.component';

import {CalendarModule, DropdownModule, GrowlModule} from 'primeng/primeng';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        RegisterRoutingModule,
        DropdownModule,
        FormsModule,
        GrowlModule,
        CalendarModule
    ],
    declarations: [RegisterComponent]
})
export class RegisterModule {
}
