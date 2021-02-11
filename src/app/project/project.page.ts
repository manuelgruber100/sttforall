import { ControllingModalPage } from './../controlling-modal/controlling-modal.page';
import { Singleton } from './../singleton';
import { ModalController, AlertController } from '@ionic/angular';
import { ProjectService } from './../services/project.service';
import { Project } from './../models/allModels';
import { Component, OnInit } from '@angular/core';
import { ProjectDetailViewModalPage } from '../project-detail-view-modal/project-detail-view-modal.page';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {
  userID: number;
  projects: Project[];
  constructor(private projectService: ProjectService, private modalController: ModalController, private alertController: AlertController) {
    const singleton = Singleton.getInstance();
    this.userID = singleton.getLoggedInUser().socialSecurityNumber;
    this.loadYourProjects();
  }

  ngOnInit() {
  }

  loadAllProjects() {
    if (Singleton.getInstance().getLoggedInUser().role == "admin" || Singleton.getInstance().getLoggedInUser().role == "head") {
      this.projectService.loadAllProjectsFromDB().subscribe(
        p => {
          this.projects = p;
        }
      )
    } else {
      this.presentAlert("Not allowed to.", "Your not an admin or head of department!");
    }
  }
  loadYourProjects() {
    this.projectService.loadAllProjectsFromUser(this.userID).subscribe(
      p => {
        this.projects = p;
      }
    )
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
  async viewProjectDetails(projectID: number) {
    //1. Get Project
    this.projectService.getSpecificProject(projectID).subscribe(async p => {
      var project: Project = p;
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
  async presentAlert(subH: string, msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: subH,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }
  async controllingWindowPresent(proId: number) {
    //0. check if allowed
    this.projectService.checkIfUserIsOwnerOrManager(proId, this.userID).subscribe(r => {
      if (!r) {
        this.presentAlert("Not allowed to","You have not the right to do this.")
      } else {
        //1. Get Project
        this.projectService.getSpecificProject(proId).subscribe(async p => {
          var project: Project = p;
          const modal = await this.modalController.create({
            component: ControllingModalPage,
            componentProps: {
              project: project,
            },
            cssClass: 'my-class'
          });
          return await modal.present();
        })
      }
    })

  }

}
