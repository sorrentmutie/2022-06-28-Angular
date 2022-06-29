import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MyValidator } from 'src/app/shared/validators/my-validator';

@Component({
  selector: 'app-hero-reactive-form',
  templateUrl: './hero-reactive-form.component.html',
  styleUrls: ['./hero-reactive-form.component.css']
})
export class HeroReactiveFormComponent  {

  myFormControl: FormControl | undefined = undefined;
  myObservable: Observable<string> | undefined = undefined;
  myForm: FormGroup | undefined = undefined;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4), MyValidator]],
      lastName: [''],
    });

    this.myForm.get("firstName")?.valueChanges
      .subscribe( valore => {
        this.myForm?.get("lastName")?.setValidators(Validators.required);
        this.myForm?.get("lastName")?.updateValueAndValidity();
      });

   }

   mySubmit() : void {
    console.log(this.myForm);
  }

  cambiaValori(){
    const name = this.myForm?.get("firstName");
    if(name) {
      name.setValue("lu");
    }

    const surname = this.myForm?.get("lastName");
    if(surname) {
      surname.setValue("bianchi");
    }
  }

  get firstName() { return this.myForm?.get("firstName")};

}
