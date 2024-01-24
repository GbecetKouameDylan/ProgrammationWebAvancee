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

 Animaux  = []
async Register()
{
  let result = await lastValueFrom(this.http.get<string[]>('https://localhost:7086/api/Account/Register'));
  console.log(result)
}
async Public()
{
  let result = await lastValueFrom(this.http.get<string[]>('https://localhost:7086/api/Account'));
  console.log(result)
}

async Private()
{
  let options = { withCredentials:true };
  let result = await lastValueFrom(this.http.get<any>('https://localhost:7086/api/user/PrivateData', options));
}

  ngOnInit(): void {
this.Public()
  }

}

