import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
    animations: [routerTransition()]
})
export class AccountComponent implements OnInit {
    source: LocalDataSource;
    settings = {
        columns: {
            id: {
                title: 'ID',
                filter: false
            },
            name: {
                title: 'Full Name',
                filter: false
            },
            username: {
                title: 'User Name',
                filter: false
            },
            email: {
                title: 'Email',
                filter: false
            }
        }
    };
    data = [
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz"
        },
        {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv"
        },
        {
            id: 3,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        },
        {
            id: 4,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        },
        {
            id: 5,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        },
        {
            id: 6,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        },
        {
            id: 7,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        },
        {
            id: 8,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        },
        {
            id: 9,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        },
        {
            id: 10,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        },
        {
            id: 11,
            name: "Nicholas DuBuque",
            username: "Nicholas.Stanton",
            email: "Rey.Padberg@rosamond.biz"
        }
    ];
    constructor() {
        this.source = new LocalDataSource(this.data); // create the source
    }
    ngOnInit() { }
    onSearch(query: string = '') {
        if (query.length <=0) {
            this.source.setFilter([]);
        }
        else {
            this.source.setFilter([
                // fields we want to include in the search
                {
                    field: 'id',
                    search: query
                },
                {
                    field: 'name',
                    search: query
                },
                {
                    field: 'username',
                    search: query
                },
                {
                    field: 'email',
                    search: query
                }
            ], false);
            // second parameter specifying whether to perform 'AND' or 'OR' search 
            // (meaning all columns should contain search query or at least one)
            // 'AND' by default, so changing to 'OR' by setting false here
        }
    }
}
