import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { My404notfoundpagePageRoutingModule } from './my404notfoundpage-routing.module';

import { My404notfoundpagePage } from './my404notfoundpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    My404notfoundpagePageRoutingModule
  ],
  declarations: [My404notfoundpagePage]
})
export class My404notfoundpagePageModule {}
