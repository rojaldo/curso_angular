import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  result: any;

  constructor(public service: ApodService) { }

  ngOnInit() {
    this.service.getRequest('https://api.punkapi.com/v2/beers').subscribe(
      (data) => this.processResult(data)
    );
  }

  processResult(data: any) {
    this.result = data;
  }

}
