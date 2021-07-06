import { Time } from "@angular/common";

export interface Appointment {
    userID: string;
    date: Date;
    time: Time;
    createdDate: Date;
    updatedDate: Date;
}