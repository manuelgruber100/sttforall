
export interface Person {
    socialSecurityNumber: number;
    prename: string;
    name: string;
    role: string;
}
export interface Time {
    id: number;
    date: Date;
    comment: string;
    userId: number;
    projectId: number;
    activity: string;
    account: string;
    workedHours: number;
}
export interface Project {
    id: number;
    title: string;
    description: string;
    status: string;
    actualEffortInDays: number;
    applicantName: number;
    currentType: string;
    decisionState: string;
    dueDate: Date;
    rejectedDate: Date;
    account: string;
}
export interface TimeSummaryFromUser {
    sum: number;
    name: string;
}
export interface TimeWithUsername {
    baseTime:Time
    username:string;
    userrole:string;
}
export interface personsInProjectWithWholeUser {
    user:Person;
    projectId:number;
    isProjectOwner:boolean;
    isProjectManager:boolean;
}
export interface personsInProject {
    userId:number;
    projectId:number;
    isProjectOwner:boolean;
    isProjectManager:boolean;
}
