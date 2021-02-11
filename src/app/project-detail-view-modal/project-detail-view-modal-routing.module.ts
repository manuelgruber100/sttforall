import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectDetailViewModalPage } from './project-detail-view-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectDetailViewModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectDetailViewModalPageRoutingModule {}
