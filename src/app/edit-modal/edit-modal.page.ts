import { ProjectListMultipleModalPage } from './../project-list-multiple-modal/project-list-multiple-modal.page';
import { TimeService } from './../services/time.service';
import { Project } from './../models/allModels';
import { Singleton } from './../singleton';
import { ProjectService } from './../services/project.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ProjectListModalPage } from '../project-list-modal/project-list-modal.page';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.page.html',
  styleUrls: ['./edit-modal.page.scss'],
})
export class EditModalPage implements OnInit {
  projectList: Project[]
  startDateFilter: Date;
  endDateFilter: Date;
  proSelectModel: number[];
  radioModel: any;
  constructor(private modalController: ModalController, private projects: ProjectService,
    private alertController: AlertController, private times: TimeService, private router: Router) {
    this.loadProjects();
  }

  ngOnInit() {
  }
  closeModal() {
    this.modalController.dismiss();
  }
  loadProjects() {
    const singleton = Singleton.getInstance();
    this.projects.loadAllProjectsFromUser(singleton.getLoggedInUser().socialSecurityNumber).subscribe(p => {
      this.projectList = p;
    })
  }
  setFilter() {
    if (this.startDateFilter == undefined && this.endDateFilter == undefined && this.proSelectModel == undefined && this.radioModel == undefined) {
      this.closeModal();
    } else {
      console.log("Filter for this projects:", this.proSelectModel)
      const singleton = Singleton.getInstance();
      //store filter options in singleton
      singleton.setEndDateFilter(this.endDateFilter);
      singleton.setStartDateFilter(this.startDateFilter);
      singleton.setProjectIDs(this.proSelectModel);
      singleton.setRadio(this.radioModel);
      //say that we need a refresh of the table
      this.times.callRefreshAfterFiltering();
      //close after filtering
      this.closeModal();
    }

  }

  async presentAlert(subHeader: string, msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: subHeader,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }
  async exploreProjects() {
    const modal = await this.modalController.create({
      component: ProjectListMultipleModalPage,
      cssClass: 'my-custom-class'
    });
    modal.onDidDismiss()
      .then((data) => {
        console.log(data['data'])
        this.proSelectModel = data['data'] // Here's your selected project!
      });
    return await modal.present();
  }

  /**  source: https://expertcodeblog.wordpress.com/2018/03/12/typescript-how-to-compare-two-dates/
   * Compares two Date objects and returns e number value that represents 
   * the result:
   * 0 if the two dates are equal.
   * 1 if the first date is greater than second.
   * -1 if the first date is less than second.
   * @param date1 First date object to compare.
   * @param date2 Second date object to compare.
   */
  public static compareDate(date1: Date, date2: Date): number {
    // With Date object we can compare dates them using the >, <, <= or >=.
    // The ==, !=, ===, and !== operators require to use date.getTime(),
    // so we need to create a new instance of Date with 'new Date()'
    let d1 = new Date(date1); let d2 = new Date(date2);

    // Check if the dates are equal
    let same = d1.getTime() === d2.getTime();
    if (same) return 0;

    // Check if the first is greater than second
    if (d1 > d2) return 1;

    // Check if the first is less than second
    if (d1 < d2) return -1;
  }

}
