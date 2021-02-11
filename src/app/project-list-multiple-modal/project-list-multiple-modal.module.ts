import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectListMultipleModalPageRoutingModule } from './project-list-multiple-modal-routing.module';

import { ProjectListMultipleModalPage } from './project-list-multiple-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectListMultipleModalPageRoutingModule
  ],
  declarations: [ProjectListMultipleModalPage]
})
export class ProjectListMultipleModalPageModule {}
