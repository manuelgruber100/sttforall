import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonthlystatementPageRoutingModule } from './monthlystatement-routing.module';

import { MonthlystatementPage } from './monthlystatement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonthlystatementPageRoutingModule
  ],
  declarations: [MonthlystatementPage]
})
export class MonthlystatementPageModule {}
