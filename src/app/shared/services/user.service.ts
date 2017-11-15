import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { API } from '../config/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserService {
    private headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http, private api: API) {
    }

    signin(input){
        return this.http.post(this.api.accountAction.LOGIN, JSON.stringify(input), this.options)
            .toPromise()
            .then((res) => {
                //check if user is Admin
                if (res.json().data.roles.length > 0 && res.json().data.roles[0].name === 'admin') {
                    localStorage.setItem('currentUser', JSON.stringify({ email: res.json().data.email, token: res.json().data.id }));
                    return res.json().data;
                }
                else{
                    return false;
                }

            })
            .catch(this.handleErrorPromise);
    }

    signout() {
        let token = JSON.parse(localStorage.getItem('currentUser')).token;
        return this.http.post(this.api.accountAction.LOGOUT + '?access_token=' + token, this.options)
            .toPromise()
            .then((res) => {
                localStorage.removeItem('currentUser');
                return res.json();
            })
            .catch(this.handleErrorPromise);
    }

    getAllAccount(){
        let token = JSON.parse(localStorage.getItem('currentUser')).token;
        return this.http.get(this.api.accountAction.GET_ALL_ACCOUNTS + '?access_token=' + token, this.options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    }

    private extractData(res: Response) {
        return res.json() || {};
    }
    private handleErrorPromise(error: Response | any) {
        return Promise.reject(error.json().message || error.json());
    }
}
