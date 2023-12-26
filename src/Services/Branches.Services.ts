import { Injectable, NgModule } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { EndPoint_GetBranches } from '../Proxy/Branches.proxy';
import {SendGetBranch } from '../Models/Branches.models';


@Injectable({
    providedIn: 'root'
})


export class BranchesServices {

    constructor(private http: HttpClient) { }


    GetCompaniesEndPoint(CompanyId:String) {
        const UrlLogin = `${EndPoint_GetBranches.UrlServer}${EndPoint_GetBranches.UrlBranch}${CompanyId}/branches`;
        return this.http.get<SendGetBranch[]>(UrlLogin);
    }
}
