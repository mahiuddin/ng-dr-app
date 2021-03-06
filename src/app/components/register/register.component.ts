import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/@services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: any;
  
  constructor(private router:Router, private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      const user = this.form.value;
      this.authService
        .SignUp(user.name,user.mobile,user.email, user.password)
        .then((res) => {
          alert("Registration successful");
          this.router.navigate(['/admin']);
        });
    } else {
      alert('Form invalid');
    }
  }

}
