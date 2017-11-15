import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamComponent } from './team.component';
import { TeamRoutingModule } from './team-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
    imports: [
        CommonModule,
        TeamRoutingModule,
        Ng2SmartTableModule
    ],
    declarations: [TeamComponent]
})
export class TeamModule { }
