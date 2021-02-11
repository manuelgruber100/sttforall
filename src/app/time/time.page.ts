import { Project } from './../models/allModels';
import { ProjectService } from './../services/project.service';
import { ProjectDetailViewModalPage } from './../project-detail-view-modal/project-detail-view-modal.page';
import { AddModalPage } from './../add-modal/add-modal.page';
import { FilterModalPage } from './../filter-modal/filter-modal.page';
import { EditModalPage } from './../edit-modal/edit-modal.page';
import { Singleton } from './../singleton';
import { TimeService } from './../services/time.service';
import { Person, Time } from '../models/allModels';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-time',
  templateUrl: './time.page.html',
  styleUrls: ['./time.page.scss'],
})
export class TimePage implements OnInit {
  usertimes: Time[];

  constructor(private times: TimeService, public modalController: ModalController, private projects:ProjectService) {
    const singleton = Singleton.getInstance();
    times.loadAllTimesForUser(singleton.getLoggedInUser().socialSecurityNumber).subscribe(
      res => {
        this.usertimes = res;
      }
    )

  }
  async presentModalFilter() {
    const modal = await this.modalController.create({
      component: EditModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  ngOnInit() {
    this.times.refreshNeeded
      .subscribe(() => {
        console.log("refresh after filter")
        //now api call for filtered times (filter settings stored in singleton!)
        const filterJson: JSON = <JSON><unknown>{
          "start": Singleton.getInstance().getStartDateFilter(),
          "end": Singleton.getInstance().getEndDateFilter(),
          "orderBy": Singleton.getInstance().getRadio(),
          "projectList": Singleton.getInstance().getProjectIDs(),
          "personId": Singleton.getInstance().getLoggedInUser().socialSecurityNumber
        }
        this.filterTimes(filterJson);

      });
    this.times.refreshNeededUpdate.subscribe(() => {
      console.log("refresh after update!")
      const singleton = Singleton.getInstance();
      this.times.loadAllTimesForUser(singleton.getLoggedInUser().socialSecurityNumber).subscribe(
        res => {
          this.usertimes = res;
        }
      )
    })

    this.times.refreshNeededDelete.subscribe(() => {
      console.log("refresh after deleting a time!")
      const singleton = Singleton.getInstance();
      this.times.loadAllTimesForUser(singleton.getLoggedInUser().socialSecurityNumber).subscribe(
        res => {
          this.usertimes = res;
        }
      )
    })

    this.times.refreshNeededAdd.subscribe(() => {
      console.log("refresh after adding a time!")
      const singleton = Singleton.getInstance();
      this.times.loadAllTimesForUser(singleton.getLoggedInUser().socialSecurityNumber).subscribe(
        res => {
          this.usertimes = res;
        }
      )
    })



  }

  filterTimes(filter: any) {
    this.times.getFilteredTimes(filter).subscribe(
      f => {
        this.usertimes = f;
      }
    )
  }
  removeFilter() {
    this.times.loadAllTimesForUser(Singleton.getInstance().getLoggedInUser().socialSecurityNumber).subscribe(
      res => {
        this.usertimes = res;
      }
    )
  }

  async presentModalEdit(time: Time) {
    const modal = await this.modalController.create({
      component: FilterModalPage,
      componentProps: {
        time: time,
      },
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async presentModalAdd() {
    const modal = await this.modalController.create({
      component: AddModalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async viewProjectDetailsOpenModal(projectID:number){
    //1. Get Project
    this.projects.getSpecificProject(projectID).subscribe(async p=>{
      var project:Project=p;
      const modal = await this.modalController.create({
        component: ProjectDetailViewModalPage,
        componentProps: {
          item: project,
        },
        cssClass: 'my-custom-class'
      });
      return await modal.present();
    })
  }
  
}
