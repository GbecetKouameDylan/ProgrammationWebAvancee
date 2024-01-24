import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {InterceptorInterceptor} from "./interceptor.interceptor";
import {CookieService} from "ngx-cookie-service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Frontend';

  constructor(public http : HttpClient, private cookie:CookieService) {
  }
user:Register = new Register("1","Dylan@gmail.com","Dylan123$","Dylan123$")
Seed:Login = new Login("1","Dylan123$")
async Register()
{
  let options = { withCredentials:true };

  let result = await lastValueFrom(this.http.post<any>('https://localhost:7086/api/Account/Register',this.user));

  console.log(this.user)
}
async Public()
{
  let result = await lastValueFrom(this.http.get<any>('https://localhost:7086/api/Account/PublicData'));
  console.log(result)
}

async Private()
{
  let result = await lastValueFrom(this.http.get<any>('https://localhost:7086/api/Account/PrivateData'));
  console.log(result)
}
  async Logout()
  {

    let result = await lastValueFrom(this.http.get<any>('https://localhost:7086/api/Account/Logout'));
    console.log(result)
  }

  async Login()
  {
    let result = await lastValueFrom(this.http.post<any>('https://localhost:7086/api/Account/Login',this.Seed));
    console.log(result)
  }
  isLoggedIn(){
    return this.cookie.get(".AspNetCore.Identity.Application");
  }
  ngOnInit(): void {
this.Public()

  }

}
export  class Register
{
  constructor(public Username:string,public Email:string,public Password:string ,public PasswordConfirm:string) {
  }
}

export  class Login
{
  constructor(public Username:string,public Password:string ) {
  }
}

