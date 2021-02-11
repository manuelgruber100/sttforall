import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectListModalPageRoutingModule } from './project-list-modal-routing.module';

import { ProjectListModalPage } from './project-list-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectListModalPageRoutingModule
  ],
  declarations: [ProjectListModalPage]
})
export class ProjectListModalPageModule {}
