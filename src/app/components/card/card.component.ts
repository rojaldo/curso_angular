import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }

  handleClick(index: number) {
    this.card.responded = true;
    this.card.indexResponse = index;
    if (this.card.correctAnswer === this.card.answers[index]) {
      this.card.correct = true;
    } else {
      this.card.correct = false;
    }
  }

  getClass(index: number): string {
    if (this.card.correctAnswer === this.card.answers[index]) {
      return 'btn btn-success btn-block';
    }
    if (!this.card.correct && index === this.card.indexResponse) {
      return 'btn btn-danger btn-block';
    }
    return 'btn btn-secondary btn-block';
  }

}
