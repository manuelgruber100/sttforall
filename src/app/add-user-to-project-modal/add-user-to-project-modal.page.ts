import { Person, personsInProject } from './../models/allModels';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProjectService } from '../services/project.service';
import { timeStamp } from 'console';
import { Singleton } from '../singleton';

@Component({
  selector: 'app-add-user-to-project-modal',
  templateUrl: './add-user-to-project-modal.page.html',
  styleUrls: ['./add-user-to-project-modal.page.scss'],
})
export class AddUserToProjectModalPage implements OnInit {

  notMembers: Person[] = [];
  members: Person[] = [];
  proId: number;
  makeMembers: Person[] = [];
  remMembers: Person[] = [];

  constructor(private modalController: ModalController, private projectService: ProjectService) { }

  ngOnInit() {
    this.loadMembers();
    this.loadNotMembers();
  }
  closeModal() {
    this.modalController.dismiss();
  }
  loadNotMembers() {
    this.projectService.getNotMembers(this.proId).subscribe(r => {
      this.notMembers = r;
      console.log("Not members:", r);
    })
  }
  loadMembers() {
    this.projectService.getMembers(this.proId).subscribe(m => {
      this.members = m;
      console.log("Members: ", m)
    });
  }
  isUserHimself(id: number) {
    var sol = false;
    if (Singleton.getInstance().getLoggedInUser().socialSecurityNumber == id) {
      sol = true;
    }
    return sol;
  }
  addToAddList(value: Person) {
    if (this.makeMembers.includes(value)) {
      const index = this.makeMembers.indexOf(value, 0);
      if (index > -1) {
        this.makeMembers.splice(index, 1);
      }
    } else {
      this.makeMembers.push(value);
    }

  }
  addToRemList(value: Person) {
    if (this.remMembers.includes(value)) {
      const index = this.remMembers.indexOf(value, 0);
      if (index > -1) {
        this.remMembers.splice(index, 1);
      }
    } else {
      this.remMembers.push(value);
    }
  }

  saveChangesAdd() {
    this.makeMembers.forEach(element => {
      var temp: personsInProject = <personsInProject>{
        userId: element.socialSecurityNumber,
        projectId: this.proId,
        isProjectOwner: false,
        isProjectManager: false
      }
      this.projectService.makeMember(temp).subscribe(r => {
        this.loadMembers();
        this.loadNotMembers();
        this.makeMembers=[];
        this.remMembers=[];
      });
    });
  }

  saveChangesRem() {
    this.remMembers.forEach(element => {
      var temp: personsInProject = <personsInProject>{
        userId: element.socialSecurityNumber,
        projectId: this.proId,
        isProjectOwner: false,
        isProjectManager: false
      }
      this.projectService.removeMember(temp).subscribe(r => {
        this.loadNotMembers();
        this.loadMembers();
        this.makeMembers=[];
        this.remMembers=[];
      });
    });
  }

}
