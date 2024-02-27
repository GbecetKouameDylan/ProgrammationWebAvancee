import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from "../user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{

  constructor(public router : Router, public service: UserService) { }

  ngOnInit(): void {
    if (!this.service.currentUser) {
      this.router.navigate(['/login']);

    }
  }
}
