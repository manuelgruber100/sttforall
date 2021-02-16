import { Project, personsInProjectWithWholeUser, Person, personsInProject } from './../models/allModels';
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
  getEffortInDecimalHours(id:number){
    return this.http.get<number>(this.globals.apiUrl + "/projects/"+id+"/effortInDays");
  }
  getRightlist(projectId:number){
    return this.http.get<personsInProjectWithWholeUser[]>(this.globals.apiUrl + "/peopleInProjects/"+projectId+"/rightList");
  }
  getMembers(projectId:number){
    return this.http.get<Person[]>(this.globals.apiUrl + "/projects/"+projectId+"/members");
  }
  getNotMembers(projectId:number){
    return this.http.get<Person[]>(this.globals.apiUrl + "/projects/"+projectId+"/notmembers");
  }
  makeMember(value:personsInProject){
    return this.http.post(this.globals.apiUrl + "/peopleInProjects/",value);
  }
  removeMember(value:personsInProject){
    return this.http.delete(this.globals.apiUrl + "/peopleInProjects/"+value.userId+"/"+value.projectId);
  }
}
