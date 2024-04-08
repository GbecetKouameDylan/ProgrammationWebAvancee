import { Component } from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";
import {shakeX} from "ng-animate";

let DEATH_DURATION_SECONDS;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('death', [transition(':increment', useAnimation(shakeX, {params: {timing: DEATH_DURATION_SECONDS}}))]),
  ]
})
export class AppComponent {
  slimeIsPresent = false;
deathh = false;

  constructor() {
  }

  spawn() {
    this.showSlime()

    // TODO Animation angular avec forwards

  }

  death(){
this.slimeIsPresent = false
    // TODO Animation angular avec forwards
this.hideSlime()
    // TODO 2e animation angular en même temps
    this.deathh = true;
    setTimeout(() => {this.deathh = false;},1000);
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
    var element = document.getElementById("slimeyId");
    element?.classList.remove("fadeIn");
    element?.classList.add("fadeOut");

  }

}
