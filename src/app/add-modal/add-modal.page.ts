import { TimeService } from './../services/time.service';
import { ProjectListModalPage } from './../project-list-modal/project-list-modal.page';
import { Time } from './../models/allModels';
import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Singleton } from '../singleton';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.page.html',
  styleUrls: ['./add-modal.page.scss'],
})
export class AddModalPage implements OnInit {
  timeCache: Time = <Time>{
    id: 0,
    date: undefined,
    comment: "",
    userId: Singleton.getInstance().getLoggedInUser().socialSecurityNumber,
    projectId: 0,
    activity: "",
    account: "",
    workedHours: 0.00
  };

  constructor(private modalController: ModalController, private alertController: AlertController, private times: TimeService) {

  }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

  addTime() {
    if (this.timeCache.date == undefined || this.timeCache.date.toString() == "" || this.timeCache.account == "" || this.timeCache.activity == "" || this.timeCache.comment == "" || this.timeCache.workedHours == 0.00) {
      this.presentAlertOnFalseInput("Incorrect input.", "Please enter information in all forms.");
    } else {

      //add
      this.times.addTime(this.timeCache).subscribe(r => {
        console.log("Added time!", r);
        this.times.callRefreshAfterAdding();
        this.closeModal();
      },
        (error: Response) => {
          //if api returns error
          this.presentAlertOnFalseInput("Incorrect input.", "Please check if the project exists and the format of your inputs are correct.");
        });
    }
  }

  async presentAlertOnFalseInput(subH: string, msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: subH,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }

  async exploreProjects() {
    const modal = await this.modalController.create({
      component: ProjectListModalPage,
      cssClass: 'my-custom-class'
    });
    modal.onDidDismiss()
      .then((data) => {
        this.timeCache.projectId = data['data'] // Here's your selected project!
      });
    return await modal.present();
  }

}
