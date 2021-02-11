import { Person, Project, Time } from './models/allModels';
/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
export class Singleton {
    private static instance: Singleton;
    private loggedInUser: Person;
    //filter options
    private startDateFilter: Date;
    private endDateFilter: Date;
    private projectIDs: number[];
    private radio: any;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() { }

    public getLoggedInUser(): Person {
        return this.loggedInUser;
    }

    public setLoggedInUser(loggedInUser: Person): void {
        this.loggedInUser = loggedInUser;
    }
    public getStartDateFilter(): Date {
        return this.startDateFilter;
    }

    public setStartDateFilter(startDateFilter: Date): void {
        this.startDateFilter = startDateFilter;
    }

    public getEndDateFilter(): Date {
        return this.endDateFilter;
    }

    public setEndDateFilter(endDateFilter: Date): void {
        this.endDateFilter = endDateFilter;
    }

    public getProjectIDs(): number[] {
        return this.projectIDs;
    }

    public setProjectIDs(projectIDs: number[]): void {
        this.projectIDs = projectIDs;
    }

    public getRadio(): any {
        return this.radio;
    }

    public setRadio(radio: any): void {
        this.radio = radio;
    }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}