import { Component, OnInit, Output, EventEmitter } from '@angular/core';

enum State { Init, FirstFigure, SecondFigure, Result }

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  @Output() signal = new EventEmitter<string>();
  display = '';
  currentState = State.Init;
  firstFigure = 0;
  secondFigure = 0;
  result = 0;
  operator = '';

  constructor() { }

  ngOnInit() {
  }
  handleNumber(num: number) {
    // this.display += num;
    switch (this.currentState) {
      case State.Init:
        this.firstFigure = num;
        this.currentState = State.FirstFigure;
        this.display += num;
        this.signal.emit(this.display);
        break;
      case State.FirstFigure:
        this.firstFigure = this.firstFigure * 10 + num;
        this.display += num;
        this.signal.emit(this.display);
        break;
      case State.SecondFigure:
        this.secondFigure = this.secondFigure * 10 + num;
        this.display += num;
        this.signal.emit(this.display);
        break;
      case State.Result:
        this.firstFigure = num;
        this.secondFigure = 0;
        this.result = 0;
        this.operator = '';
        this.display = '' + num;
        this.signal.emit(this.display);
        this.currentState = State.FirstFigure;
        break;

      default:
        break;
    }
  }

  handleSymbol(symbol: string) {
    // this.display += symbol;
    switch (this.currentState) {
      case State.Init:

        break;
      case State.FirstFigure:
        if (this.isOperator(symbol)) {
          this.operator = symbol;
          this.currentState = State.SecondFigure;
          this.display += symbol;
          this.signal.emit(this.display);
        }
        break;
      case State.SecondFigure:
        if (symbol === '=') {
          this.result = this.resolve();
          this.currentState = State.Result;
          this.display += symbol + this.result;
          this.signal.emit(this.display);
        }
        break;
      case State.Result:
        if (this.isOperator(symbol)) {
          this.firstFigure = this.result;
          this.operator = symbol;
          this.secondFigure = 0;
          this.display = '' + this.result + symbol;
          this.signal.emit(this.display);
          this.result = 0;
          this.currentState = State.SecondFigure;
        }
        break;

      default:
        break;
    }
  }

  resolve(): number {
    switch (this.operator) {
      case '+':
        return this.firstFigure + this.secondFigure;
      case '-':
        return this.firstFigure - this.secondFigure;
      case '*':
        return this.firstFigure * this.secondFigure;
      case '/':
        return this.firstFigure / this.secondFigure;

      default:
        break;
    }
  }

  isOperator(symbol: string): boolean {
    return (symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/')
  }

}
