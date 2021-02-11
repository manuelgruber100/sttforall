import { UserService } from './../services/user.service';
import { ListViewTimesModalPage } from './../list-view-times-modal/list-view-times-modal.page';
import { TimeService } from './../services/time.service';
import { Project, Time, TimeSummaryFromUser, TimeWithUsername } from './../models/allModels';
import { ModalController } from '@ionic/angular';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { error } from 'protractor';

@Component({
  selector: 'app-controlling-modal',
  templateUrl: './controlling-modal.page.html',
  styleUrls: ['./controlling-modal.page.scss'],
})
export class ControllingModalPage implements OnInit {

  project: Project;
  @ViewChild('doughnutCanvas', { static: true }) private doughnutCanvas: ElementRef;
  doughnutChart: any;
  constructor(private modalController: ModalController, private times: TimeService, private userService:UserService) {

  }


  ngOnInit() {
    this.doughnutChartMethod();
  }
  closeModal() {
    this.modalController.dismiss();
  }
  doughnutChartMethod() {
    this.times.getTimesSummary(this.project.id).subscribe(t => {
      var timeData: TimeSummaryFromUser[] = t;
      var labelsData: string[] = [];
      var dataData: number[] = [];
      const colorScheme = [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
    ]

      timeData.forEach(element => {
        labelsData.push(element.name)
      });
      timeData.forEach(element => {
        dataData.push(element.sum)
      });
      this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
        type: 'doughnut',
        data: {
          labels: labelsData,
          datasets: [{
            label: '# of hours',
            data: dataData,
            backgroundColor: [
              colorScheme.toString()
            ],
            hoverBackgroundColor: [
              

            ]
          }]
        }
      });
    }, error => {
      console.log(error)
    })

  }
  async showListViewTimes() {
   var timesForModal:TimeWithUsername[]=[];
    this.times.getTimesFromProject(this.project.id).subscribe(async t => {
      t.forEach(element => {
        var temp:TimeWithUsername=<TimeWithUsername>{
          
        };
        temp.id=element.id;
        temp.date=element.date;
        temp.comment=element.comment;
        temp.userId=element.userId;
        temp.projectId=element.projectId;
        temp.activity=element.activity;
        temp.account=element.account;
        temp.workedHours=element.workedHours;
        this.userService.getOneSpecificUser(element.userId).subscribe(p=>{
          temp.username=p.prename+" "+p.name;
          temp.userrole=p.role;
          timesForModal.push(temp);
        })
      });

      const modal = await this.modalController.create({
        component: ListViewTimesModalPage,
        componentProps: {
          times: timesForModal,
          project: this.project,
        },
        cssClass: 'my-class'
      });
      return await modal.present();
    }, e => {
      console.log("error", e)
    })
  }
  dynamicColor():string {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  }


}
