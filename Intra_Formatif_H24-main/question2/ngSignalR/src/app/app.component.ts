import { Component } from '@angular/core';
import * as signalR from "@microsoft/signalr"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pizza Hub';

  private hubConnection?: signalR.HubConnection;
  isConnected: boolean = false;

  selectedChoice: number = -1;
  nbUsers: number = 0;

  pizzaPrice: number = 0;
  money: number = 0;
  nbPizzas: number = 0;

  constructor(){
    this.connect();
  }

  connect() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5282/hubs/pizza')
      .build();

    this.hubConnection
      .start()
      .then(() => {
        console.log('La connexion est active!');
        // TODO Une fois connectée, on peut commencer à écouter pour les évènements qui vont déclencher des callbacks
        this.hubConnection!.on('UneFonction', (data) => {
          // data a le même type que ce qui a été envoyé par le serveur
          console.log(data);
        })

      })
      .catch(err => console.log('Error while starting connection: ' + err))
    // TODO: Mettre isConnected à true seulement une fois que la connection au Hub est faite
    this.isConnected = true;
  }

  selectChoice(selectedChoice:number) {
    this.selectedChoice = selectedChoice;
    this.hubConnection!.invoke('', this.selectedChoice,);
  }

  unselectChoice() {
    this.selectedChoice = -1;
  }

  addMoney()
  {

  }

  buyPizza()
  {

  }
}
