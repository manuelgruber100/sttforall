import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectListModalPage } from './project-list-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectListModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectListModalPageRoutingModule {}
