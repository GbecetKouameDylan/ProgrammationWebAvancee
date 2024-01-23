import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';

  constructor(public http : HttpClient) {
  }


async Register()
{

}
async Public()
{
  let result = await lastValueFrom(this.http.get<any>('https://localhost:7086/api/Account/PublicData'));
  console.log(result)
}

async Private()
{
  let options = { withCredentials:true };
  let result = await lastValueFrom(this.http.get<any>('https://localhost:7086/api/user/PrivateData', options));
}

}

