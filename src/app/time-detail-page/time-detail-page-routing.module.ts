import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeDetailPagePage } from './time-detail-page.page';

const routes: Routes = [
  {
    path: '',
    component: TimeDetailPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeDetailPagePageRoutingModule {}
