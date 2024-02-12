import { Component, OnInit } from '@angular/core';
import { UselessTask } from '../models/UselessTask';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";



@Component({
  selector: 'app-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.css']
})
export class PollingComponent implements OnInit {

  title = 'labo.signalr.ng';
  tasks: UselessTask[] = [];
  uselessTask: UselessTask = new UselessTask(1,"",true)



  taskname: string = "dwdw";
constructor(public http:HttpClient) {
}
  ngOnInit(): void {
    this.updateTasks();
  }

  complete(id: number) {
    // TODO On invoke la méthode pour compléter une tâche sur le serveur (Contrôleur d'API)

    let response =  lastValueFrom(this.http.get<any>('https://localhost:7289/api/UselessTasks/Complete/'+ this.uselessTask.id));
  }

  addtask() {
    // TODO On invoke la méthode pour ajouter une tâche sur le serveur (Contrôleur d'API)

    let response = lastValueFrom(this.http.post<any>('https://localhost:7289/api/UselessTasks/Add',this.taskname));

  }

  updateTasks() {
    // TODO: Faire une première implémentation simple avec un appel au serveur pour obtenir la liste des tâches
    let response = lastValueFrom(this.http.get<any>('https://localhost:7289/api/UselessTasks/GetAll'));
    // TODO: UNE FOIS QUE VOUS AVEZ TESTER AVEC DEUX CLIENTS: Utiliser le polling pour mettre la liste de tasks à jour chaque seconde

  }
}
