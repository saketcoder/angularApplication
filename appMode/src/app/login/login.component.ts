import { Component, OnInit } from '@angular/core';
import { User } from './model/user.model';
import { AuthService } from '../auth.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

user:  User;
  
  constructor( private serve:AuthService,
    private alert: AlertService,
    private router: Router) { 
    
  }

  login(){
    console.log('Following user is trying to login',this.user);
    this.serve.loginuser(this.user).subscribe((result) =>{
      if (result){
        this.serve.current.mailId = result.mailId;
        this.serve.current.name = result.name;
        this.serve.current.password = result.password;
        this.router.navigate(['/user'])
        this.alert.success('Successfully logged in.');
      }
      else
      
      this.alert.danger('MailId or Password is incorrect.');
    });

  }

  ngOnInit() {
    this.user = new User();
  }

}
