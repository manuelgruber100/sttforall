import { My404notfoundpagePage } from './my404notfoundpage/my404notfoundpage.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'time',
    loadChildren: () => import('./time/time.module').then( m => m.TimePageModule)
  },
  {
    path: 'project',
    loadChildren: () => import('./project/project.module').then( m => m.ProjectPageModule)
  },
  {
    path: 'monthlystatement',
    loadChildren: () => import('./monthlystatement/monthlystatement.module').then( m => m.MonthlystatementPageModule)
  },
  {
    path: 'filter-modal',
    loadChildren: () => import('./filter-modal/filter-modal.module').then( m => m.FilterModalPageModule)
  },
  {
    path: 'add-modal',
    loadChildren: () => import('./add-modal/add-modal.module').then( m => m.AddModalPageModule)
  },
  {
    path: 'project-list-modal',
    loadChildren: () => import('./project-list-modal/project-list-modal.module').then( m => m.ProjectListModalPageModule)
  },
  {
    path: 'project-list-multiple-modal',
    loadChildren: () => import('./project-list-multiple-modal/project-list-multiple-modal.module').then( m => m.ProjectListMultipleModalPageModule)
  },
  {
    path: 'project-detail-view-modal',
    loadChildren: () => import('./project-detail-view-modal/project-detail-view-modal.module').then( m => m.ProjectDetailViewModalPageModule)
  },
  {
    path: 'controlling-modal',
    loadChildren: () => import('./controlling-modal/controlling-modal.module').then( m => m.ControllingModalPageModule)
  },
  {
    path: 'people',
    loadChildren: () => import('./people/people.module').then( m => m.PeoplePageModule)
  },
  { path: '**', component: My404notfoundpagePage },   {
    path: 'edit-modal',
    loadChildren: () => import('./edit-modal/edit-modal.module').then( m => m.EditModalPageModule)
  },  {
    path: 'list-view-times-modal',
    loadChildren: () => import('./list-view-times-modal/list-view-times-modal.module').then( m => m.ListViewTimesModalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
