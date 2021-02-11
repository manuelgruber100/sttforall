import { TimeService } from './../services/time.service';
import { Time } from './../models/allModels';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-detail-page',
  templateUrl: './time-detail-page.page.html',
  styleUrls: ['./time-detail-page.page.scss'],
})
export class TimeDetailPagePage implements OnInit {
  time:Time;
  proId:number;
  sum:number=0;
  name:string="";
  constructor(private times:TimeService) {
    
   }

  ngOnInit() {
    this.times.getSummaryFromUser(this.proId,this.time.userId).subscribe(s=>{
      this.sum=s.sum;
      this.name=s.name;
    })
  }

}
