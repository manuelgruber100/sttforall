import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PercentageListModalPage } from './percentage-list-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PercentageListModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PercentageListModalPageRoutingModule {}
