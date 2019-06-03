import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, OnDestroy {

  display = '';

  constructor() { }

  ngOnInit() {
    console.log('Calculator created');
  }

  ngOnDestroy(): void {
    console.log('Calculator destroyed');
  }

  handleSignal(event) {
    this.display = event;
  }

}
