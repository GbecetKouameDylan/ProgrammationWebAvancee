import { Component, OnInit } from '@angular/core';
import * as signalR from "@microsoft/signalr"
import { UselessTask } from '../models/UselessTask';

@Component({
  selector: 'app-signalr',
  templateUrl: './signalr.component.html',
  styleUrls: ['./signalr.component.css']
})
export class SignalrComponent implements OnInit {

  private hubConnection?: signalR.HubConnection;
  usercount = 0;
  tasks: UselessTask[] = [];
  taskname: string = "";

  ngOnInit(): void {
    this.connecttohub()
  }

  connecttohub() {
    // TODO On doit commencer par créer la connexion vers le Hub
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7289/TacheHub')
      .build();
    // TODO On doit ensuite se connecter
    this.hubConnection
      .start()

  }



 async complete(id: number) {
    // TODO On invoke la méthode pour compléter une tâche sur le serveur
let r = await this.hubConnection!.invoke('Complete',id)

  }

  async addtask() {
    // TODO On invoke la méthode pour ajouter une tâche sur le serveur
  let r = await this.hubConnection!.invoke('Add',this.taskname)
    console.log(r.value.text)

this.tasks.push(r.value)
  }

}
