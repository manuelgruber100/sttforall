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
  constructor(private modalController: ModalController, public popoverController: PopoverController, private timeService: TimeService, private userService: UserService) { }

  ngOnInit() {
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
    var timesForModal: TimeWithUsername[] = [];

    this.timeService.getTimesFromProjectSortedByUser(this.project.id).subscribe(t => {
      t.forEach(element => {
        var temp: TimeWithUsername = <TimeWithUsername>{
        };
        temp.id = element.id;
        temp.date = element.date;
        temp.comment = element.comment;
        temp.userId = element.userId;
        temp.projectId = element.projectId;
        temp.activity = element.activity;
        temp.account = element.account;
        temp.workedHours = element.workedHours;
        timesForModal.push(temp);
      });
      timesForModal.forEach(element => {
        console.log(element.userId)
        this.userService.getOneSpecificUser(element.userId).subscribe(u=>{
          element.username=u.prename+" "+u.name;
          element.userrole=u.role;
        })
      });
      this.times = timesForModal;



    });
    
  }
  ordertimeswithdate() {
    this.times = [];
    var timesForModal: TimeWithUsername[] = [];

    this.timeService.getTimesFromProjectSortedByDate(this.project.id).subscribe(t => {
      t.forEach(element => {
        var temp: TimeWithUsername = <TimeWithUsername>{
        };
        temp.id = element.id;
        temp.date = element.date;
        temp.comment = element.comment;
        temp.userId = element.userId;
        temp.projectId = element.projectId;
        temp.activity = element.activity;
        temp.account = element.account;
        temp.workedHours = element.workedHours;
        timesForModal.push(temp);
      });
      timesForModal.forEach(element => {
        console.log(element.userId)
        this.userService.getOneSpecificUser(element.userId).subscribe(u=>{
          element.username=u.prename+" "+u.name;
          element.userrole=u.role;
        })
      });
      this.times = timesForModal;



    });
  }
  resetFilter() {
    var timesForModal: TimeWithUsername[] = [];
    this.timeService.getTimesFromProject(this.project.id).subscribe(async t => {
      t.forEach(element => {
        var temp: TimeWithUsername = <TimeWithUsername>{
        };
        temp.id = element.id;
        temp.date = element.date;
        temp.comment = element.comment;
        temp.userId = element.userId;
        temp.projectId = element.projectId;
        temp.activity = element.activity;
        temp.account = element.account;
        temp.workedHours = element.workedHours;
        this.userService.getOneSpecificUser(element.userId).subscribe(p => {
          temp.username = p.prename + " " + p.name;
          temp.userrole = p.role;
          timesForModal.push(temp);
        })
      });
    })
    this.times = timesForModal;
  }
}

