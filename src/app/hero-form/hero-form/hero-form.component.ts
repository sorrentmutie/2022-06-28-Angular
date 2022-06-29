import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  hero = new Hero(1, "Dr. Salvatore", "Magia", "Salvatore Sorrentino");
  powers = ["Magia", "Invisibilità", "Forza"];
  mySubmit(){
    console.log("submit:" + this.hero.name);
  }

  resetForm(){
    this.hero = new Hero(1,"","","");
  }
}
