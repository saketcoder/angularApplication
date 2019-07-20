import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/login/model/user.model';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  user: User;
  constructor() {
    this.user = new User();
   }

  ngOnInit() {
  }

}
