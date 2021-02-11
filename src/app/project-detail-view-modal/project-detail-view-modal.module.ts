import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectDetailViewModalPageRoutingModule } from './project-detail-view-modal-routing.module';

import { ProjectDetailViewModalPage } from './project-detail-view-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectDetailViewModalPageRoutingModule
  ],
  declarations: [ProjectDetailViewModalPage]
})
export class ProjectDetailViewModalPageModule {}
