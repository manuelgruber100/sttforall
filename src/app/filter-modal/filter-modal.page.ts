import { TimeService } from './../services/time.service';
import { Singleton } from './../singleton';
import { Time } from './../models/allModels';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ProjectListModalPage } from '../project-list-modal/project-list-modal.page';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.page.html',
  styleUrls: ['./filter-modal.page.scss'],
})
export class FilterModalPage implements OnInit {
  time: Time;
  //here we save the edited things!
  changesModel: Time = <Time>{
    id: 0,
    date: undefined,
    comment: "",
    userId: Singleton.getInstance().getLoggedInUser().socialSecurityNumber,
    projectId: 0,
    activity: "",
    account: "",
    workedHours: 0.00
  };
  constructor(private modalController: ModalController, private times: TimeService) {

  }

  ngOnInit() {
    console.log("Edit called for: ", this.time)
    this.changesModel.account=this.time.account;
    this.changesModel.activity=this.time.activity;
    this.changesModel.workedHours=this.time.workedHours;
    this.changesModel.comment=this.time.comment;
    this.changesModel.projectId=this.time.projectId;
    this.changesModel.date=this.time.date;
  }
  closeModal() {
    this.modalController.dismiss();
  }
  updateTime() {
    this.changesModel.id = this.time.id;

    if (this.changesModel.date == undefined || this.changesModel.date.toString() == "") {
      this.changesModel.date = this.time.date;
    }
    if (this.changesModel.activity == "") {
      this.changesModel.activity = this.time.activity;
    }
    if (this.changesModel.account == "") {
      this.changesModel.account = this.time.account;
    }
    if (this.changesModel.workedHours == 0.00) {
      this.changesModel.workedHours = this.time.workedHours;
    }
    if (this.changesModel.comment == "") {
      this.changesModel.comment = this.time.comment;
    }
    if (this.changesModel.projectId == 0) {
      this.changesModel.projectId = this.time.projectId;
    }


    this.times.updateTime(this.changesModel).subscribe(r => {
      this.times.callRefreshAfterUpdating();
      this.closeModal();
    });

  }
  deleteTime() {
    this.times.deleteTime(this.time.id).subscribe(d => {
      this.times.callRefreshAfterDeleting();
      this.closeModal();
    });
  }
  async exploreProjects() {
    const modal = await this.modalController.create({
      component: ProjectListModalPage,
      cssClass: 'my-custom-class'
    });
    modal.onDidDismiss()
      .then((data) => {
        this.changesModel.projectId = data['data'] // Here's your selected project!
      });
    return await modal.present();
  }

}
