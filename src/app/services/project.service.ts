import { Project } from './../models/allModels';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private globals: Globals, private http: HttpClient) { }

  loadAllProjectsFromUser(userSV: number) {
    return this.http.get<Project[]>(this.globals.apiUrl + "/projects/from/user/" + userSV);
  }

  getSpecificProject(id:number){
    return this.http.get<Project>(this.globals.apiUrl + "/projects/" + id);
  }
  loadAllProjectsFromDB(){
    return this.http.get<Project[]>(this.globals.apiUrl + "/projects/");
  }
  checkIfUserIsOwnerOrManager(proId:number,userId:number){
    return this.http.get<Boolean>(this.globals.apiUrl + "/people/canUserControl/"+userId+"/"+proId);
  }
}
