
import { Time, TimeSummaryFromUser } from './../models/allModels';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Globals } from '../globals';




@Injectable({
  providedIn: 'root'
})
export class TimeService {

  private _refreshNeeded = new Subject<void>();
  private _refreshNeededUpdate = new Subject<void>();
  private _refreshNeededDelete = new Subject<void>();
  private _refreshNeededAdd = new Subject<void>();

  get refreshNeeded() {
    return this._refreshNeeded;
  }
  get refreshNeededUpdate() {
    return this._refreshNeededUpdate;
  }
  get refreshNeededDelete() {
    return this._refreshNeededDelete;
  }
  get refreshNeededAdd() {
    return this._refreshNeededAdd;
  }

  constructor(private globals: Globals, private http: HttpClient) {

  }
  loadAllTimesForUser(userSV: number) {
    return this.http.get<Time[]>(this.globals.apiUrl + "/times/from/User/" + userSV);
  }
  callRefreshAfterFiltering() {
    this._refreshNeeded.next();
  }
  getFilteredTimes(filters: any) {
    return this.http.post<Time[]>(this.globals.apiUrl + "/times/from/User/filtered", filters);
  }
  updateTime(time: Time) {
    return this.http.put(this.globals.apiUrl + "/times/" + time.id, time);
  }
  callRefreshAfterUpdating() {
    this._refreshNeededUpdate.next();
  }
  deleteTime(id: number) {
    return this.http.delete(this.globals.apiUrl + "/times/" + id);
  }
  callRefreshAfterDeleting() {
    this._refreshNeededDelete.next();
  }
  addTime(time: Time) {
    return this.http.post(this.globals.apiUrl + "/times", time);
  }
  callRefreshAfterAdding() {
    this._refreshNeededAdd.next();
  }
  getTimesFromProject(id:number){
    return this.http.get<Time[]>(this.globals.apiUrl + "/times/from/project/" + id);
  }
  getTimesSummary(id:number){
    return this.http.get<TimeSummaryFromUser[]>(this.globals.apiUrl + "/times/from/project/perUser/" + id);
  }
  getSummaryFromUser(proId:number,userId:number){
    return this.http.get<TimeSummaryFromUser>(this.globals.apiUrl + "/times/from/project/perUser/" + proId+"/"+userId);
  }
  getTimesFromProjectSortedByDate(proId:number){
    return this.http.get<Time[]>(this.globals.apiUrl + "/times/from/project/" + proId+"/byDate");
  }
  getTimesFromProjectSortedByUser(proId:number){
    return this.http.get<Time[]>(this.globals.apiUrl + "/times/from/project/" + proId+"/byUser");
  }
}
