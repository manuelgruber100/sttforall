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
    applicantUnit: string;
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
