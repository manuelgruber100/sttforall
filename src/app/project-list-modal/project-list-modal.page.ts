import { ProjectDetailViewModalPage } from './../project-detail-view-modal/project-detail-view-modal.page';
import { Singleton } from './../singleton';
import { ProjectService } from './../services/project.service';
import { Project } from './../models/allModels';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list-modal',
  templateUrl: './project-list-modal.page.html',
  styleUrls: ['./project-list-modal.page.scss'],
})
export class ProjectListModalPage implements OnInit {
  projects: Project[]
  constructor(private modalController: ModalController, public projectService: ProjectService) {
    this.loadData();
  }

  ngOnInit() {
  }
  loadData() {
    this.projectService.loadAllProjectsFromUser(Singleton.getInstance().getLoggedInUser().socialSecurityNumber).subscribe(p => {
      this.projects = p;
    })
  }

  closeModal() {
    this.modalController.dismiss();
  }
  FilterJSONData(ev: any) {
    this.projectService.loadAllProjectsFromUser(Singleton.getInstance().getLoggedInUser().socialSecurityNumber).subscribe(p => {
      this.projects = p;
      const val = ev.target.value;
      if (val && val.trim() != '') {
        this.projects = this.projects.filter((item) => {
          return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    })
  }
  selectVal(id: number) {
    this.modalController.dismiss(id);
  }
  async viewProjectDetails(projectID:number){
    //1. Get Project
    this.projectService.getSpecificProject(projectID).subscribe(async p=>{
      var project:Project=p;
      const modal = await this.modalController.create({
        component: ProjectDetailViewModalPage,
        componentProps: {
          item: project,
        },
        cssClass: 'my-custom-class'
      });
      return await modal.present();
    })
  }

}
