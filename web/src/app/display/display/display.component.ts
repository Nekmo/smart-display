import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  datetime: Date;

  constructor() { }

  ngOnInit() {
    this.updateDatetime();
  }

  updateDatetime() {
    this.datetime = new Date();

    setTimeout(
      () => this.updateDatetime(),
      1000 * (60 - this.datetime.getSeconds())
    );
  }

}
