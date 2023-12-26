import { Injectable, NgModule } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { proxyNewLogin } from '../Proxy/User.proxy';
import { RequestLogin, SendLogin } from '../Models/User.models';


@Injectable({
    providedIn: 'root'
})


export class UserServices{

    constructor(private http: HttpClient) { }


    NewLoginEndPoint(user:SendLogin) {
        const UrlLogin = `${proxyNewLogin.UrlServe}${proxyNewLogin.UrlLogin}`;
        return this.http.post<RequestLogin>(UrlLogin,user);
    }
}
