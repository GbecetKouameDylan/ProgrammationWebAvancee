import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {lastValueFrom} from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Frontend';

  constructor(public http: HttpClient) {
  }

  ngOnInit(): void {
    this.AddChat()
  }

  cat:Chat[] = []



  async AddChat() {
    let response = await lastValueFrom(this.http.get<any>('http://localhost:5027/api/Chats'));


    for (let i = 0; i < response.length; i++) {
let  cat1 = new Chat(response[i].nom,response[i].image)
        this.cat.push(cat1)
    }
    console.log(response)
  }



}
export class Chat
{
constructor(public Nom:string,public Image:string) {
}
}


