import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddUserToProjectModalPage } from './add-user-to-project-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddUserToProjectModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddUserToProjectModalPageRoutingModule {}
