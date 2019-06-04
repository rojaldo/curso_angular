import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  result: any;
  myBeers = [];
  minValue: number = 5;
  maxValue: number = 20;
  options: Options = {
    floor: 0,
    ceil: 56
  };

  constructor(public service: ApodService) { }

  ngOnInit() {
    this.service.getRequest('https://api.punkapi.com/v2/beers').subscribe(
      (data) => this.processResult(data)
    );
  }

  processResult(data: any) {
    this.result = data;
    this.myBeers = this.result.filter((beer) => {
      return (beer.abv > this.minValue && beer.abv < this.maxValue);
    });
  }

  handleChange() {
    console.log('Min: ' + this.minValue + ' | Max: ' + this.maxValue);
    this.myBeers = this.result.filter((beer) => {
      return (beer.abv > this.minValue && beer.abv < this.maxValue);
    });
  }

}
