import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@services/auth.service';

@Component({
  selector: 'app-adminleftside',
  templateUrl: './adminleftside.component.html',
  styleUrls: ['./adminleftside.component.scss']
})
export class AdminleftsideComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.LogOut();
 }
}