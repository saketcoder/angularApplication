import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { AlertService } from 'ngx-alerts';
import { User } from 'src/app/login/model/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : User;
  constructor( private auth:AuthService,
    private router:Router,
    private alert: AlertService,
    ) { 

      this.user = auth.current;
    }

  update(){
this.auth.updateUser(this.user)
.subscribe((result) =>{
  this.alert.success('successfully updated.');
  this.router.navigate(['/user']);
});
  }

  ngOnInit() {
  }

}
