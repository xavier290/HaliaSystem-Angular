import { Component, OnInit } from '@angular/core';
import { CompaniesServices } from '../../Services/CompaniesServices';
import { Router } from '@angular/router';
import { BranchesServices } from '../../Services/Branches.Services';
import { GetCompaniesModel } from '../../Models/Companies.models';
import { SendGetBranch } from '../../Models/Branches.models';
import {  SendLogin } from '../../Models/User.models';
import { UserServices } from '../../Services/UserServices';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  companies: GetCompaniesModel[] = [];
  branches: SendGetBranch[] = [];

  constructor(
    private apiCompanyServices: CompaniesServices,
    private apiBranchServices: BranchesServices,
    private apiUserServices: UserServices,
    private router: Router) {
  }

  ngOnInit(): void {
    this.apiCompanyServices.GetCompaniesEndPoint().subscribe(
      (data) => {

        this.companies = data;


        this.apiBranchServices.GetCompaniesEndPoint(this.companies[0].id).subscribe(
          (data) => {
            this.branches = data
          }
        )
      },
      (error) => {
        // Manejo de errores, puedes agregar lógica para manejar errores de la solicitud
        console.error('Error fetching companies:', error);
      }
    );

  }

  
onCompanyChange(event: any) {
  const selectedCompanyId:string = event.target.value;

  this.apiBranchServices.GetCompaniesEndPoint(selectedCompanyId).subscribe(
    (data) => {
      this.branches = data

    },
    (error) => {
      // Manejo de errores, puedes agregar lógica para manejar errores de la solicitud
      console.error('Error fetching companies:', error);
    }
  )
}

onClicNewLogin(){
  const user = document.querySelector('#txtUser') as HTMLInputElement;
  const pass = document.querySelector('#txtPassword') as HTMLInputElement;
  const companySelected = document.querySelector('#CmbEmpresa') as HTMLSelectElement;
  const branchSelected = document.querySelector('#CmbSucursal') as HTMLSelectElement;

  const send:SendLogin = {
    username: user.value,
    password: pass.value,
    companyId: companySelected.value,
    branchId: branchSelected.value
  }

  console.log(send)

  this.apiUserServices.NewLoginEndPoint(send).subscribe((data) => {

    const selectedCompanyIndex = companySelected.selectedIndex;
    const selectedCompanyOption = companySelected.options.item(selectedCompanyIndex);

    const selectedBranchIndex = branchSelected.selectedIndex;
    const selectedBranchOption = branchSelected.options.item(selectedBranchIndex);

    sessionStorage.setItem('company', selectedCompanyOption?.text!);
    sessionStorage.setItem('branch', selectedBranchOption?.text! )
    sessionStorage.setItem('user',user.value)
    sessionStorage.setItem('userId',data._id)
    sessionStorage.setItem('userName',data.name)
    
    this.router.navigate(['/MainMenu']);
  })
}
}

