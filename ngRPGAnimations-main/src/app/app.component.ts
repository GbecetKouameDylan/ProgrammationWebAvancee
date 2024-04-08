import { Component } from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";
import {shakeX} from "ng-animate";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('death', [transition(':increment', useAnimation(shakeX, {params: {timing: 0.6 }}))]),
  ]
})
export class AppComponent {
  slimeIsPresent = false;
ng_death = 0;
death = false;

  constructor() {
  }

  spawn() {
    this.showSlime()

    // TODO Animation angular avec forwards

  }

  deathh(){
this.slimeIsPresent = false
   this.hideSlime()

    // TODO Animation angular avec forwards

    // TODO 2e animation angular en même temps

  }

  attack(){
    // TODO Jouer une animation et augmenter l'intensité du mouvement avec scale
    // TODO Jouer une autre animation avant
  }

  hit(){
    // TODO Utilisé Animista pour faire une animation différente avec css (wobble)
  }

  showSlime(){
    var element = document.getElementById("slimeyId");
    element?.classList.remove("fadeOut");
    element?.classList.add("fadeIn");
    this.slimeIsPresent = true;
  }

  hideSlime()
  {
    this.death = true;
    this.ng_death +=1 ;
    setTimeout(() => {this.death = false;},5000);
    var element = document.getElementById("slimeyId");
    element?.classList.remove("fadeIn");
    element?.classList.add("fadeOut");

  }

}
