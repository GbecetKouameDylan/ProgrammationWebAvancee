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


    // On se connecte au Hub
    this.hubConnection
      .start()
      .then(() => {
        console.log('La connexion est active!');

        this.hubConnection!.on('pricePizza', (data) => {
this.pizzaPrice = data
          console.log(data);
        });
        this.hubConnection!.on('money', (data) => {
          this.money = data
          console.log(data);
        });

        this.hubConnection!.on('totalPizza', (data) => {
          this.nbPizzas = data
          console.log(data);
        });
        this.hubConnection!.on('user', (data) => {
          this.nbUsers = data
          console.log(data);
        });
      })
      .catch(err => console.log('Error while starting connection: ' + err))
    this.isConnected = true;
  }

  selectChoice(selectedChoice:number) {
    this.selectedChoice = selectedChoice;
    this.hubConnection!.invoke('SelectChoice',selectedChoice);

  }

  unselectChoice() {
    this.hubConnection!.invoke('UnselectChoice',this.selectedChoice);
    this.selectedChoice = -1;

  }

  addMoney() {
    this.hubConnection!.invoke('AddMoney',this.selectedChoice);

  }

  buyPizza() {
    this.hubConnection!.invoke('BuyPizza',this.selectedChoice);

  }
}
