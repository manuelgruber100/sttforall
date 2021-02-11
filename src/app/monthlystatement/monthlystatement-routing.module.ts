import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonthlystatementPage } from './monthlystatement.page';

const routes: Routes = [
  {
    path: '',
    component: MonthlystatementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthlystatementPageRoutingModule {}
