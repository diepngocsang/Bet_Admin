import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
    imports: [
        CommonModule,
        AccountRoutingModule,
        Ng2SmartTableModule
    ],
    declarations: [AccountComponent]
})
export class AccountModule { }
