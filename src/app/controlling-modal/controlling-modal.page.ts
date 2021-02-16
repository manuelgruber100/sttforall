import { EditRightsModalPage } from './../edit-rights-modal/edit-rights-modal.page';
import { ProjectService } from './../services/project.service';
import { PercentageListModalPage } from './../percentage-list-modal/percentage-list-modal.page';
import { UserService } from './../services/user.service';
import { ListViewTimesModalPage } from './../list-view-times-modal/list-view-times-modal.page';
import { TimeService } from './../services/time.service';
import { Project, Time, TimeSummaryFromUser, TimeWithUsername } from './../models/allModels';
import { ModalController } from '@ionic/angular';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { error } from 'protractor';
import { AddUserToProjectModalPage } from '../add-user-to-project-modal/add-user-to-project-modal.page';

@Component({
  selector: 'app-controlling-modal',
  templateUrl: './controlling-modal.page.html',
  styleUrls: ['./controlling-modal.page.scss'],
})
export class ControllingModalPage implements OnInit {

  project: Project;
  @ViewChild('doughnutCanvas', { static: true }) private doughnutCanvas: ElementRef;
  doughnutChart: any;
  effortInHours: number = 0;
  constructor(private modalController: ModalController, private times: TimeService, private userService: UserService, private projectService: ProjectService) {

  }


  ngOnInit() {
    this.doughnutChartMethod();

    this.projectService.getEffortInDecimalHours(this.project.id).subscribe(effort => {
      this.effortInHours = effort;
    }, error => {
      console.log(error)
    });
    this.userService.refreshNeededAdd.subscribe(r=>{
      console.log("Refresh after adding members!")
      this.doughnutChartMethod();
    })

  }
  closeModal() {
    this.modalController.dismiss();
  }
  doughnutChartMethod() {

    var color = [];
    this.times.getTimesSummary(this.project.id).subscribe(t => {
      var timeData: TimeSummaryFromUser[] = t;
      var labelsData: string[] = [];
      var dataData: number[] = [];

      timeData.forEach(element => {
        labelsData.push(element.name)
      });
      timeData.forEach(element => {
        dataData.push(element.sum)
      });
      timeData.forEach(element => {
        color.push(this.getRandomColor());
      });
      this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
        type: 'pie',
        data: {
          labels: labelsData,
          datasets: [{
            label: '# of hours',
            data: dataData,
            backgroundColor: color,
            hoverBackgroundColor: color,
          }]
        }
      });
    }, error => {
      console.log(error)
    })

  }
  async showListViewTimes() {
    var timesForModal: TimeWithUsername[] = [];
    this.times.getTimesFromProject(this.project.id).subscribe(async t => {
      timesForModal = t;
      const modal = await this.modalController.create({
        component: ListViewTimesModalPage,
        componentProps: {
          times: timesForModal,
          project: this.project,
        },
        cssClass: 'my-class'
      });
      return await modal.present();
    });

  }
  getRandomColor(): string {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  async percentageList() {
    const modal = await this.modalController.create({
      component: PercentageListModalPage,
      componentProps: {
        proId: this.project.id,
      },
      cssClass: 'my-class'
    });
    return await modal.present();
  }
  async editRightsModal() {
    const modal = await this.modalController.create({
      component: EditRightsModalPage,
      componentProps: {
        proId: this.project.id,
      },
      cssClass: 'my-class'
    });
    return await modal.present();
  }
  async addPeople() {
    const modal = await this.modalController.create({
      component: AddUserToProjectModalPage,
      componentProps: {
        proId: this.project.id
      },
      cssClass: 'my-class'
    });
    return await modal.present();
  }


}
