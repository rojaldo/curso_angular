import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes = new Array<Hero>();

  constructor() {
    this.heroes.push(new Hero('Superman', 'Man of Steel'));
    this.heroes.push(new Hero('Batman', 'Dark knight'));
    this.heroes.push(new Hero('Spiderman', 'Spidy'));
  }
}
