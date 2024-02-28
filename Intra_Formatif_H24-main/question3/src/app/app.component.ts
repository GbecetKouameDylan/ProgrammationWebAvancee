import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators,FormGroup } from '@angular/forms';
import {splitNsName} from "@angular/compiler";
interface Data {
  name?: string | null ;
  roadnumber?: string | null ;
  rue?: string | null ;
  postalcode?: string | null ;
  comments?: string | null ;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive.form';

  FormGroup: FormGroup;
  formData?: Data;


  constructor(
    private fb: FormBuilder
  ) {
    this.FormGroup = this.fb.group({
      name: ['', [Validators.required]],
      roadnumber: ['', [Validators.required, Validators.min(1000), Validators.max(9999)]],
      rue: ['', [Validators.required]],
      postalcode: ['', Validators.pattern("^[A-Z][0-9][A-Z][ ]?[0-9][A-Z][0-9]$")],
      comments: ['', [Validators.required]]},
    { validators: this.CommsValidator }
    );

    this.FormGroup.valueChanges.subscribe(() => {
      this.formData = this.FormGroup.value;
    });
  }

  CommsValidator(control: AbstractControl): ValidationErrors | null {

    const comments = control.get('comments')?.value || '';
const name = control.get('name')?.value
    const commentsArray = comments.split(' ') || '';

  if (commentsArray.length <= 10 && comments != "" )
    {
    control.get('comments')?.setErrors({Coms:true});
    }
    for (let i = 0; i < commentsArray.length; i++) {
      if (commentsArray[i] == name)
      {
        control.get('comments')?.setErrors({name:true});
      }
    }



      return null;
  }

}

