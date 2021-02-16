import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditRightsModalPage } from './edit-rights-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EditRightsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditRightsModalPageRoutingModule {}
