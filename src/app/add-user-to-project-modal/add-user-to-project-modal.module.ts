import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddUserToProjectModalPageRoutingModule } from './add-user-to-project-modal-routing.module';

import { AddUserToProjectModalPage } from './add-user-to-project-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddUserToProjectModalPageRoutingModule
  ],
  declarations: [AddUserToProjectModalPage]
})
export class AddUserToProjectModalPageModule {}
