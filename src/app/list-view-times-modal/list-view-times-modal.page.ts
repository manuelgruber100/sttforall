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
  times:TimeWithUsername[];
  project:Project;
  
  constructor(private modalController:ModalController, public popoverController: PopoverController) { }

  ngOnInit() {
  }
  closeModal() {
    this.modalController.dismiss();
  }
  async viewDetailsTimeModal(ev: any) {
    const popover = await this.popoverController.create({
      component: TimeDetailPagePage,
      componentProps: {
        time: ev
      },
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      
    });
    return await popover.present();
  }

}
