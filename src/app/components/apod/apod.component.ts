import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  result = {};
  resolved = false;
  selectedDate: any;

  constructor(public service: ApodService) { }

  ngOnInit() {
    this.service.getRequest(this.service.url).subscribe(
      (data) => this.processData(data),
      (error) => this.processError(error));
  }

  processData(data: any) {
    this.result = data;
    this.resolved = true;
  }

  processError(error: any) {
    console.error('Error: ' + error);
  }

  youtubeParser(url: string) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : false;
  }

  selectDate() {
    const myURL = this.service.url + '&date=' +
      this.selectedDate.year + '-' +
      this.selectedDate.month + '-' +
      this.selectedDate.day;
    this.service.getRequest(myURL).subscribe(
      (data) => this.processData(data),
      (error) => this.processError(error));

  }
}
