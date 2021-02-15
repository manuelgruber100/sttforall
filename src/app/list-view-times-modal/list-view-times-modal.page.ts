import { ProjectService } from './../services/project.service';
import { UserService } from './../services/user.service';
import { TimeService } from './../services/time.service';
import { TimeDetailPagePage } from './../time-detail-page/time-detail-page.page';
import { FilterModalPage } from './../filter-modal/filter-modal.page';
import { Project, TimeWithUsername } from './../models/allModels';
import { ModalController, PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Time } from '../models/allModels';

@Component({
  selector: 'app-list-view-times-modal',
  templateUrl: './list-view-times-modal.page.html',
  styleUrls: ['./list-view-times-modal.page.scss'],
})
export class ListViewTimesModalPage implements OnInit {
  times: TimeWithUsername[];
  project: Project;
  itemChecked: string;
  effortInHours:number;
  effortInDays:string;
  constructor(private modalController: ModalController, public popoverController: PopoverController, private timeService: TimeService, private userService: UserService, private projectService:ProjectService) { }

  ngOnInit() {
    this.projectService.getEffortInDecimalHours(this.project.id).subscribe(effort => {
      this.effortInHours = effort;
      this.effortInDays=(effort/8).toFixed();
    }, error => {
      console.log(error)
    });
  }
  closeModal() {
    this.modalController.dismiss();
  }
  async viewDetailsTimeModal(item: Time) {
    const popover = await this.popoverController.create({
      component: TimeDetailPagePage,
      componentProps: {
        time: item,
        proId: this.project.id,
      },
      cssClass: 'my-custom-class',
      translucent: true,

    });
    return await popover.present();
  }
  orderTimesBy() {
    if (this.itemChecked == "Date") {
      this.ordertimeswithdate();
    } else {
      this.ordertimeswithuser();
    }

  }
  ordertimeswithuser() {
    this.times = [];
    this.timeService.getTimesFromProjectSortedByUser(this.project.id).subscribe(t => {
      this.times = t;
    });
  }
  ordertimeswithdate() {
    this.times = [];
    this.timeService.getTimesFromProjectSortedByDate(this.project.id).subscribe(t => {
      this.times = t;
    });
  }
  resetFilter() {
    this.timeService.getTimesFromProject(this.project.id).subscribe(t => {
      this.times = t;
    })

  }
  FilterJSONData(ev: any) {
    this.timeService.getTimesFromProject(this.project.id).subscribe(t => {
      this.times = t;
      //filter by searchterm
      const val = ev.target.value;

      if (val && val.trim() != '') {
        this.times = this.times.filter((item) => {
          return (item.username.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    })
  }
}

