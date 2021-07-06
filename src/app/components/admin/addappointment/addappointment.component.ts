import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppointmentService } from 'src/app/@services/appointment.service';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrls: ['./addappointment.component.scss']
})
export class AddappointmentComponent implements OnInit {
  formAppointment : any;
  constructor(private fb:FormBuilder,private aptService:AppointmentService) { }

  ngOnInit(): void {
    this.formAppointment = this.fb.group({
      aptDate: ['', Validators.required],
      aptNumber: ['', Validators.required],
      aptTime: ['', Validators.required]
    });
  }
  submit(){
    const apt = this.formAppointment.value;
    apt.userID = "";
    apt.createdDate = new Date();
    apt.updatedDate = new Date();
    let numOfApt = apt.aptNumber;
    try{
      for(let i:number=1; i<=numOfApt; i++){
        debugger
        this.aptService.AddAppointment(apt).then((res) => {
        });
        let nextApt = this.aptService.AddMinutes(apt.aptTime,6);
        apt.aptTime = nextApt;
      }
    }catch{
      alert("error found");
    }
    alert("Data Inserted Successfully");        
  }
}