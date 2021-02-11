import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectListMultipleModalPage } from './project-list-multiple-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectListMultipleModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectListMultipleModalPageRoutingModule {}
