import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControllingModalPageRoutingModule } from './controlling-modal-routing.module';

import { ControllingModalPage } from './controlling-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControllingModalPageRoutingModule
  ],
  declarations: [ControllingModalPage]
})
export class ControllingModalPageModule {}
