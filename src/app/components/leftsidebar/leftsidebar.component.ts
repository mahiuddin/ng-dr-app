import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/@services/auth.service';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss']
})
export class LeftsidebarComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

}