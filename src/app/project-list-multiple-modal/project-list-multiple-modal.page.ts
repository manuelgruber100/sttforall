import { Project } from './../models/allModels';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProjectService } from '../services/project.service';
import { Singleton } from '../singleton';
import { ProjectDetailViewModalPage } from '../project-detail-view-modal/project-detail-view-modal.page';

@Component({
  selector: 'app-project-list-multiple-modal',
  templateUrl: './project-list-multiple-modal.page.html',
  styleUrls: ['./project-list-multiple-modal.page.scss'],
})
export class ProjectListMultipleModalPage implements OnInit {
  projects: Project[];
  selected: number[] = [];

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


  exit() {
    this.modalController.dismiss(this.selected);
  }
  onCheckedChanged(id: number) {
    if (this.selected.includes(id)) {
      const index = this.selected.indexOf(id);
      this.selected.splice(index, 1)
    } else {
      this.selected.push(id);
    }
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
