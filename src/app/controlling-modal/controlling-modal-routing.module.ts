import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControllingModalPage } from './controlling-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ControllingModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControllingModalPageRoutingModule {}
