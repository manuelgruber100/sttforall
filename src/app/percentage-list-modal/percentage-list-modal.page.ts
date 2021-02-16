import { ModalController } from '@ionic/angular';
import { TimeService } from './../services/time.service';
import { TimeSummaryFromUser } from './../models/allModels';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-percentage-list-modal',
  templateUrl: './percentage-list-modal.page.html',
  styleUrls: ['./percentage-list-modal.page.scss'],
})
export class PercentageListModalPage implements OnInit {
  proId: number;
  summary: TimeSummaryFromUser[];
  constructor(private timeService: TimeService, private modalController: ModalController) { }

  ngOnInit() {
    this.timeService.getTimesSummary(this.proId).subscribe(s => {
      this.summary = s;
    })
  }
  calcPercentage(hours: number): string {
    if (hours == 0) {
      return String(0);
    } else {
      var cachesum = 0;
      this.summary.forEach(element => {
        cachesum += element.sum;
      });

      var sol = (hours / cachesum) * 100

      return (Math.round(sol * 100) / 100).toFixed(2);
    }

  }
  closeModal() {
    this.modalController.dismiss();
  }
  FilterJSONData(ev: any) {
    this.timeService.getTimesSummary(this.proId).subscribe(s => {
      this.summary = s;

      //filter by searchterm
      const val = ev.target.value;

      if (val && val.trim() != '') {
        this.summary = this.summary.filter((item) => {
          return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    })
  }

}
