import { Person } from '../models/allModels';
import { UserService } from './../services/user.service';
import { Globals } from './../globals';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { Singleton } from '../singleton';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usermodel: Person = <Person>{
    name: "",
    prename: "",
    socialSecurityNumber: 0,
    role: ""
  };
  username: string = "";

  constructor(private globals: Globals, private users: UserService, private alertController: AlertController, private router: Router) {
    this.users.getAllUsers();
  }

  ngOnInit() {
  }

  onLoginClicked() {
    this.usermodel.name = this.username;

    const singleton = Singleton.getInstance();

    if (this.users.exists(this.usermodel) == true) {
      console.log("Successfull login!")

      var person: Person = this.users.getFromDB(this.usermodel);
      singleton.setLoggedInUser(person);
  
      this.router.navigate(['/time']);

    } else {
      this.presentAlertOnFalseLogin();
    }
  }

  async presentAlertOnFalseLogin() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: 'Username or password is incorrect!',
      message: 'Please check your input.',
      buttons: ['OK']
    });
    await alert.present();
  }

}
