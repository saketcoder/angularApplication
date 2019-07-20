import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/login/model/user.model';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  user : User;
  constructor() { 
    this.user = new User();
    }

  ngOnInit() {
  }

}
