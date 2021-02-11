import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any;
  constructor() {
    this.sideMenu();
  }
  sideMenu() {
    this.navigate =
      [
        {
          title: "Login / Logout",
          url: "/login",
          icon: "home"
        },
        {
          title: "Time management",
          url: "/time",
          icon: "time"
        },
        {
          title: "Project management",
          url: "/project",
          icon: "clipboard"
        },
        {
          title: "Monthly statement",
          url: "/monthlystatement",
          icon: "cash"
        },
      ]
  }
}
