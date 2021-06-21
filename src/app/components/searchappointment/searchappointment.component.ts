import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-searchappointment',
  templateUrl: './searchappointment.component.html',
  styleUrls: ['./searchappointment.component.scss']
})
export class SearchappointmentComponent implements OnInit {

  constructor() { 
   }

   selectedDate = '';
   appointmentDates: object[] =
       [
         {
           date:'17 June 2021',
           time:['5.17PM','5.20PM']
         },
         {
           date: '21 June 2021',
           time:['5.21PM','5.20PM']
         },
         {
           date:'27 June 2021',
           time:['5.27PM','5.20PM']
         }
       ];
       
  appTime1:any[]; 
  
  ngOnInit(): void {   
  }

  onOptionsSelected(appDate:string){
      //debugger
      for(let getDate of this.appointmentDates){
        if(appDate == getDate['date']){
          console.log(typeof getDate['time']);
          this.appTime1  = Object.assign([], getDate['time']);
        }
      }  
  }
  
}

interface AptDate {
  date: string;
  time: object;
}