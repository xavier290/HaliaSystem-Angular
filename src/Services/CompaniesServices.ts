import { Injectable, NgModule } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { EndPoint_GetCompanies } from '../Proxy/Companies.proxy';
import { GetCompaniesModel } from '../Models/Companies.models';


@Injectable({
    providedIn: 'root'
})


export class CompaniesServices {

    constructor(private http: HttpClient) { }


    GetCompaniesEndPoint() {
        const UrlLogin = `${EndPoint_GetCompanies.UrlServer}${EndPoint_GetCompanies.UrlCompa}`;
        return this.http.get<GetCompaniesModel[]>(UrlLogin);
    }
}
