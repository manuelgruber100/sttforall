import { UserService } from './../services/user.service';
import { ModalController } from '@ionic/angular';
import { Project } from './../models/allModels';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-detail-view-modal',
  templateUrl: './project-detail-view-modal.page.html',
  styleUrls: ['./project-detail-view-modal.page.scss'],
})
export class ProjectDetailViewModalPage implements OnInit {

  item:Project;
  imglink:string="https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  applicantUnit:string="Test";
  constructor(private modalController: ModalController, private userService:UserService) { }

  ngOnInit() {
    this.userService.getOneSpecificUser(this.item.applicantName).subscribe(u=>{
      this.applicantUnit=u.prename+" "+u.name;
    })
  }
  closeModal(){
    this.modalController.dismiss();
  }


}
