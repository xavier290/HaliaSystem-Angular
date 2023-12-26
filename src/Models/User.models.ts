export interface SendLogin
{
    username: string,
    password: string,
    companyId: string,
    branchId: string
}

export interface RequestLogin
{
    _id:string,
    name:string,
    token:string
}