import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListViewTimesModalPageRoutingModule } from './list-view-times-modal-routing.module';

import { ListViewTimesModalPage } from './list-view-times-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListViewTimesModalPageRoutingModule
  ],
  declarations: [ListViewTimesModalPage]
})
export class ListViewTimesModalPageModule {}
