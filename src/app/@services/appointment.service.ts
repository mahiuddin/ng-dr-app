import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Appointment } from '../@models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private afs:AngularFirestore) { }

  SetAppointment(appointment: any) {
    const aptRef: AngularFirestoreDocument<any> = this.afs.doc(
      `appointments/${appointment.aid}`
    );
    const aptData: Appointment = {
      userID: appointment.userID,
      date: appointment.aptDate,
      time: appointment.aptTime,
      createdDate: appointment.createdDate,
      updatedDate:appointment.updatedDate
    };
    return aptRef.set(aptData, {
      merge: true,
    });
  }

  AddAppointment(appointment: any) {
    return new Promise<any>((resolve, reject) =>{
        this.afs
            .collection("appointments")
            .add(appointment)
            .then(res => { resolve("Data Inserted")}, err => reject(err));
    });
  }
  
  AddMinutes(getTime:string, minute:number):string{
    let arrTime = getTime.split(":");
    let aptMin = Number(arrTime[1]);
    let nextMin = Number(aptMin + minute);
    if(nextMin>59){
       let setMin = nextMin - 60;
       let setHour = Number(arrTime[0]+1);
       return setHour+":"+setMin;
    }else{
      return Number(arrTime[0])+":"+nextMin;
    } 
  }
}