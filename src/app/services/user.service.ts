import { Person } from '../models/allModels';
import { Globals } from './../globals';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  savedUsers: Person[]
  constructor(private globals: Globals, private http: HttpClient) {
    this.getAllUsers().subscribe(s => {
      this.savedUsers = s;
    })
  }
  getAllUsers() {
    return this.http.get<Person[]>(this.globals.apiUrl + "/people")
  }
  exists(value: Person): boolean {
    var returnVal = false;
    this.savedUsers.forEach(element => {
      if (element.name.toLowerCase() == value.name.toLowerCase()) {
        returnVal = true;
      }
    });
    return returnVal;
  }

  getFromDB(value: Person): Person {
    var returnVal;
    this.savedUsers.forEach(element => {
      if (element.name.toLowerCase() == value.name.toLowerCase()) {
        returnVal = element;
      }
    });
    return returnVal;
  }

}
