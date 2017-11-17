import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { LocalDataSource } from 'ng2-smart-table';
import { UserService } from '../../_services/user.service';

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
            firstName: {
                title: 'First Name',
                filter: false
            },
            lastName: {
                title: 'Last Name',
                filter: false
            },
            email: {
                title: 'Email',
                filter: false
            },
            emailVerified: {
                title: 'Email Verified',
                filter: false
            }
        }
    };
    data = [];
    constructor(private userService: UserService) {
        this.getData();
    }
    ngOnInit() { }
    onSearch(query: string = '') {
        if (query.length <= 0) {
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
                    field: 'firstName',
                    search: query
                },
                {
                    field: 'lastName',
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

    getData() {
        this.userService.getAllAccount().then(result => {
            this.data = result.data;
            this.source = new LocalDataSource(this.data); // create the source
        },
            error => {

            });
    }
}
