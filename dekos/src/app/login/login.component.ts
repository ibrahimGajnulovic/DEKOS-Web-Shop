import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../models/User.class';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  user:User = {} as User

  constructor(private userService:UserService ,private router: Router, private loginService:LoginService,private toastr: ToastrService ) {}

  ngOnInit(): void {}

  backToRegister() {
    this.router.navigateByUrl('register');
  }

  loginUser(event:any) {
    event.preventDefault();
    this.loginService.loginUser(this.user).subscribe((response:User) => {
      if (this.user.status === 'BANNED_STATUS') {
        this.toastr.warning('YOU ARE BANNED FROM THIS SITE!');
        return;
      }
       if (!response) {
         this.toastr.warning('Failed Login, please try again.');
         return;
       }
        
      this.toastr.success('Successfull logged in');
      this.userService.saveUserToStorage(response);
      this.router.navigateByUrl('home')

    });

  }
}
