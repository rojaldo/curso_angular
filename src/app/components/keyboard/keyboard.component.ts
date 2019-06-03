import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';
export enum State { Init, FirstFigure, SecondFigure, Result }

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  @Output() signal = new EventEmitter<string>();

  constructor(public service: CalculatorService) { }

  ngOnInit() {
  }
  handleNumber(num: number) {
    // this.display += num;
    switch (this.service.currentState) {
      case State.Init:
        this.service.firstFigure = num;
        this.service.currentState = State.FirstFigure;
        this.service.display += num;
        this.signal.emit(this.service.display);
        break;
      case State.FirstFigure:
        this.service.firstFigure = this.service.firstFigure * 10 + num;
        this.service.display += num;
        this.signal.emit(this.service.display);
        break;
      case State.SecondFigure:
        this.service.secondFigure = this.service.secondFigure * 10 + num;
        this.service.display += num;
        this.signal.emit(this.service.display);
        break;
      case State.Result:
        this.service.firstFigure = num;
        this.service.secondFigure = 0;
        this.service.result = 0;
        this.service.operator = '';
        this.service.display = '' + num;
        this.signal.emit(this.service.display);
        this.service.currentState = State.FirstFigure;
        break;

      default:
        break;
    }
  }

  handleSymbol(symbol: string) {
    // this.display += symbol;
    switch (this.service.currentState) {
      case State.Init:

        break;
      case State.FirstFigure:
        if (this.isOperator(symbol)) {
          this.service.operator = symbol;
          this.service.currentState = State.SecondFigure;
          this.service.display += symbol;
          this.signal.emit(this.service.display);
        }
        break;
      case State.SecondFigure:
        if (symbol === '=') {
          this.service.result = this.service.resolve();
          this.service.currentState = State.Result;
          this.service.display += symbol + this.service.result;
          this.signal.emit(this.service.display);
        }
        break;
      case State.Result:
        if (this.isOperator(symbol)) {
          this.service.firstFigure = this.service.result;
          this.service.operator = symbol;
          this.service.secondFigure = 0;
          this.service.display = '' + this.service.result + symbol;
          this.signal.emit(this.service.display);
          this.service.result = 0;
          this.service.currentState = State.SecondFigure;
        }
        break;

      default:
        break;
    }
  }

  isOperator(symbol: string): boolean {
    return (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/')
  }

}
