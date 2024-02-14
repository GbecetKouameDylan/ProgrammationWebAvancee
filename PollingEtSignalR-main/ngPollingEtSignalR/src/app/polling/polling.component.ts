import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpParams} from "@angular/common/http";
import { UselessTask } from '../models/UselessTask';
import {lastValueFrom} from "rxjs";





@Component({
  selector: 'app-polling',
  templateUrl: './polling.component.html',
  styleUrls: ['./polling.component.css']
})
export class PollingComponent implements OnInit {
  constructor(public http:HttpClient) {
  }
  title = 'labo.signalr.ng';
  tasks: UselessTask[] = [];
  uselessTask: UselessTask = new UselessTask(1,"",true)



  taskname: string = "";

  ngOnInit(): void {
    this.updateTasks();

  }

  async complete(id: number) {
    // TODO On invoke la méthode pour compléter une tâche sur le serveur (Contrôleur d'API)

    let r = await lastValueFrom (this.http.get<any>('https://localhost:7289/api/UselessTasks/Complete/'+ id));
  }

 async addtask() {
    // TODO On invoke la méthode pour ajouter une tâche sur le serveur (Contrôleur d'API)

     let r = await lastValueFrom(this.http.post<any>('https://localhost:7289/api/UselessTasks/Add?taskText='+ this.taskname,this.taskname))

   this.tasks.push(new UselessTask(1,this.taskname,true))
  }

  async updateTasks() {
    // TODO: Faire une première implémentation simple avec un appel au serveur pour obtenir la liste des tâches
     let r = await lastValueFrom(this.http.get<any>('https://localhost:7289/api/UselessTasks/GetAll'));
    // TODO: UNE FOIS QUE VOUS AVEZ TESTER AVEC DEUX CLIENTS: Utiliser le polling pour mettre la liste de tasks à jour chaque seconde
    setTimeout(() => {this.updateTasks()}, 1);
  }
}
