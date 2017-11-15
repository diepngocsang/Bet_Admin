import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss'],
    animations: [routerTransition()]
})
export class TeamComponent implements OnInit {
    
    constructor() {
    }
    ngOnInit() { }
    
}
