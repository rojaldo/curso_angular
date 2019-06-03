import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = new Array<Hero>();
  heroName = '';
  constructor() { }

  ngOnInit() {
    this.heroes.push(new Hero('Superman', 'Man of Steel'));
    this.heroes.push(new Hero('Batman', 'Dark knight'));
    this.heroes.push(new Hero('Spiderman', 'Spidy'));
  }

  addHero() {
    this.heroes.push(this.heroName);
    this.heroName = '';
  }

}
