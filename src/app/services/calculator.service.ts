import { Injectable } from '@angular/core';
export enum State { Init, FirstFigure, SecondFigure, Result }

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  display = '';
  currentState = State.Init;
  firstFigure = 0;
  secondFigure = 0;
  result = 0;
  operator = '';

  constructor() { }

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
}
