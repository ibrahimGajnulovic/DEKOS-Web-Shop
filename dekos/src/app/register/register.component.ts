import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/User.class';
import { RegisterService } from '../services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {


  user: User = {} as User;

validateEmail(email:any) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


  constructor(private toastr: ToastrService, private router: Router, private registerService:RegisterService) {
    
  }

  ngOnInit(): void {
  }

  registerUser(event: Event) {
    event.preventDefault();

    if(!this.user.firstName) {
      this.toastr.warning('First name is required');
      return;
    }
    if (!this.user.lastName) {
      this.toastr.warning('Last name is required');
      return;
    }
    if (!this.user.address || this.user.address.split('').length <= 6) {
      this.toastr.warning('Address is required. Min: 6 characters');
      return;
    }
    if (!this.validateEmail(this.user.emailAddress)) {
      this.toastr.warning('E-mail is not valid');
      return;
    }
    if (!this.user.username || this.user.username.split('').length <= 5) {
      this.toastr.warning('Username must be at least 5 characters');
      return;
    }
    if (!this.user.password || this.user.password.split('').length <= 5) {
      this.toastr.warning('Password must be at least 5 characters');
      return;
    }
    
    

    this.registerService.registerUser(this.user).subscribe((response:string) => {
      this.toastr.success(response)
      
    })
  }

  backToLogin() {
    this.router.navigateByUrl('login');
  }

  
}
