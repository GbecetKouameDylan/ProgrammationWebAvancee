import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  sweet : boolean = false;
  salty : boolean = false;

  constructor() { }

  ngOnInit() {
    this.sweet = localStorage.getItem("sweet") != null;
    this.salty = localStorage.getItem("salty") != null;
  }

  updateSalty(){
    if(this.salty)
      localStorage.setItem("salty", "true");
    else
      localStorage.removeItem("salty");
  }

  updateSweet(){
    if(this.sweet)
      localStorage.setItem("sweet", "true");
    else
      localStorage.removeItem("sweet");
  }

}
