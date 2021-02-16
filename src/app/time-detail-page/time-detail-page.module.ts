import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimeDetailPagePageRoutingModule } from './time-detail-page-routing.module';

import { TimeDetailPagePage } from './time-detail-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimeDetailPagePageRoutingModule
  ],
  declarations: [TimeDetailPagePage]
})
export class TimeDetailPagePageModule {}
