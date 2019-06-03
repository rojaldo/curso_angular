import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  result = {};

  constructor(public service: ApodService) { }

  ngOnInit() {
    this.service.getRequest(this.service.url).subscribe(
      (data) => this.processData(data),
      (error) => this.processError(error));
  }

  processData(data: any) {
    this.result = data;
  }

  processError(error: any) {
    console.error('Error: ' + error);
    
  }
}
