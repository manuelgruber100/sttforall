import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListViewTimesModalPage } from './list-view-times-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ListViewTimesModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListViewTimesModalPageRoutingModule {}
