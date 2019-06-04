import { Component, OnInit } from '@angular/core';
import { TrivialService } from 'src/app/services/trivial.service';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-trivial',
  templateUrl: './trivial.component.html',
  styleUrls: ['./trivial.component.scss']
})
export class TrivialComponent implements OnInit {

  result: any;
  cards: Card[] = [];
  responded = false;

  constructor(public service: TrivialService) { }

  ngOnInit() {
    this.service.getRequest().subscribe(
      (data) => this.processResult(data)
    );
  }

  processResult(data: any) {
    this.result = data;
    for (const card of data.results) {
      this.cards.push(new Card(card));
    }
    this.responded = true;
  }


}
