import { AddUserToProjectModalPage } from './../add-user-to-project-modal/add-user-to-project-modal.page';
import { Singleton } from './../singleton';
import { UserService } from './../services/user.service';
import { personsInProject, personsInProjectWithWholeUser } from './../models/allModels';
import { ProjectService } from './../services/project.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-rights-modal',
  templateUrl: './edit-rights-modal.page.html',
  styleUrls: ['./edit-rights-modal.page.scss'],
})
export class EditRightsModalPage implements OnInit {
  proId:number;
  rightList:personsInProjectWithWholeUser[]=[];
  constructor(private modalController:ModalController, private projectService:ProjectService, private users:UserService) { }

  ngOnInit() {
    this.projectService.getRightlist(this.proId).subscribe( r=>{
      this.rightList=r;
    },error=>
    {
      alert(error)
    })
  }
  closeModal() {
    this.modalController.dismiss();
  }
  submitNewRights(){
    this.rightList.forEach(element => {
      var temp:personsInProject = <personsInProject>{

      };
      temp.userId=element.user.socialSecurityNumber;
      temp.projectId=element.projectId;
      temp.isProjectManager=element.isProjectManager;
      temp.isProjectOwner=element.isProjectOwner;

      //pass to db
      this.users.updateRight(temp).subscribe(ur=>{
        console.log("Updated")
      },error =>{
        console.log(error)
      });
    });
  }
  isUserHimself(id:number):boolean{
    var sol=false;
    if(Singleton.getInstance().getLoggedInUser().socialSecurityNumber==id){
      sol=true;
    }
    return sol;
  }



}
