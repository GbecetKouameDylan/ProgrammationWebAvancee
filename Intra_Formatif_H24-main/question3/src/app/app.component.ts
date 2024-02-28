import {Component, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
interface Data {
  name?: string | null ;
  roadnumber?: string | null ;
  rue?: string | null ;
  postalcode?: string | null ;
  comments?: string | null ;
}
export class AppComponent implements OnInit{
  title = 'reactive.form';



  constructor(
    private fb:FormBuilder
  ) { }
  formData?: Data;
  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      this.formData = this.form.value;
    });
    }

  form = this.fb.group({
    name: ['', [Validators.required]],
    roadnumber: ['',[Validators.required]],
   rue:['',[Validators.required]],
    postalcode:['',[Validators.required]],
    comments:['',[Validators.required]]

  });
}


