import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  form: any;
  constructor(
    private fb:FormBuilder,
    private authService : AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit(){
    if (this.form.valid) {
      const user = this.form.value;
      this.authService.LogIn(user.email, user.password).then((res) => {
        if(res.type=="success"){
          setTimeout(()=>{
            this.router.navigate(['admin']);
          },1000);
        }else{
          alert("User or password was wrong");
        }
      });
    } else {
      alert('Form invalid');
    }
  }
}