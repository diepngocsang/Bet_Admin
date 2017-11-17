import { Injectable } from '@angular/core';

@Injectable()
export class API {
    private baseURL = 'http://localhost:3000/api';
    //Accounts API
    private accountsURL = this.baseURL + '/accounts';
    accountAction = {
        LOGIN: this.accountsURL + '/login',
        LOGOUT: this.accountsURL + '/logout',
        GET_ALL_ACCOUNTS: this.accountsURL
    };

    constructor() { }

}