import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditRightsModalPageRoutingModule } from './edit-rights-modal-routing.module';

import { EditRightsModalPage } from './edit-rights-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditRightsModalPageRoutingModule
  ],
  declarations: [EditRightsModalPage]
})
export class EditRightsModalPageModule {}
