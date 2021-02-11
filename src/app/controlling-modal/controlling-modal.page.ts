import { ListViewTimesModalPage } from './../list-view-times-modal/list-view-times-modal.page';
import { TimeService } from './../services/time.service';
import { Project, Time, TimeSummaryFromUser } from './../models/allModels';
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
  constructor(private modalController: ModalController, private times: TimeService) {

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
      var labelsData:string[]=[];
      var dataData:number[]=[];
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
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            hoverBackgroundColor: [
              '#FFCE56',
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#FF6384'
            ]
          }]
        }
      });
    }, error => {
      console.log(error)
    })

  }
  async showListViewTimes(){
    this.times.getTimesFromProject(this.project.id).subscribe(async t =>{
      const modal = await this.modalController.create({
        component: ListViewTimesModalPage,
        componentProps: {
          times: t,
          project:this.project,
        },
        cssClass: 'my-class'
      });
      return await modal.present();
    },e =>{
      console.log("error",e)
    })
  }


}
