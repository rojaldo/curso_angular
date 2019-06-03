import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.scss']
})
export class HerolistComponent implements OnInit {

  @Input() myHeroes: Hero[];

  constructor() { }

  ngOnInit() {
  }

  removeHero(heroIndex: number) {
    this.myHeroes.splice(heroIndex, 1);
  }

}
