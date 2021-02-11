import { Time } from './../models/allModels';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-detail-page',
  templateUrl: './time-detail-page.page.html',
  styleUrls: ['./time-detail-page.page.scss'],
})
export class TimeDetailPagePage implements OnInit {
  time:Time;
  constructor() { }

  ngOnInit() {
  }

}
