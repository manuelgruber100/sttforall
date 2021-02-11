import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { My404notfoundpagePage } from './my404notfoundpage.page';

const routes: Routes = [
  {
    path: '',
    component: My404notfoundpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class My404notfoundpagePageRoutingModule {}
