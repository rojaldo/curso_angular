import { Component, OnInit, Input } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() display: string;
  constructor(public service: CalculatorService) { }

  ngOnInit() {
  }

}
