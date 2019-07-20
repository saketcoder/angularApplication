import { Component, OnInit } from '@angular/core';
import { User } from '../login/model/user.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User
 
  constructor(private serve:AuthService,
    private alertService: AlertService,
    private router:Router,
    private spinner: NgxSpinnerService) { 
    this.user = new User();
  }

 
  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 5000);
  }

  register() {
    console.log('Following user is trying to register',this.user);
    this.serve.registerUser(this.user).subscribe(result =>{
      this.router.navigate(['/login']);
      this.alertService.success('Successfully registered.');
    
    })
    
  };



}
