import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroform',
  templateUrl: './heroform.component.html',
  styleUrls: ['./heroform.component.scss']
})
export class HeroformComponent implements OnInit {

  @Output() signal = new EventEmitter<Hero>();
  heroName = '';
  heroDescription = '';
  constructor() { }

  ngOnInit() {
  }

  addHero() {
    this.signal.emit(new Hero(this.heroName, this.heroDescription));
    this.heroName = '';
    this.heroDescription = '';
  }

}
