import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Frontend';

  constructor(public http : HttpClient) {
  }
user:Register = new Register("Dylan1111111","Dylan@gmail.com","Dylan123$","Dylan123$")
Seed:Login = new Login("Dylan1111111","Dylan123$")
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
  let options = { withCredentials:true };
  let result = await lastValueFrom(this.http.get<any>('https://localhost:7086/api/Account/PrivateData', options));
}
  async Logout()
  {
    let options = { withCredentials:true };
    let result = await lastValueFrom(this.http.post<any>('https://localhost:7086/api/Account/Logout',options));
    console.log(result)
  }

  async Login()
  {
    let options = { withCredentials:true };
    let result = await lastValueFrom(this.http.post<any>('https://localhost:7086/api/Account/Login',this.Seed));
    console.log(this.Seed)
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

