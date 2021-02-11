import { Project } from './../models/allModels';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Time } from '../models/allModels';

@Component({
  selector: 'app-list-view-times-modal',
  templateUrl: './list-view-times-modal.page.html',
  styleUrls: ['./list-view-times-modal.page.scss'],
})
export class ListViewTimesModalPage implements OnInit {
  times:Time[];
  project:Project;
  
  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  closeModal() {
    this.modalController.dismiss();
  }

}
