import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PercentageListModalPageRoutingModule } from './percentage-list-modal-routing.module';

import { PercentageListModalPage } from './percentage-list-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PercentageListModalPageRoutingModule
  ],
  declarations: [PercentageListModalPage]
})
export class PercentageListModalPageModule {}
