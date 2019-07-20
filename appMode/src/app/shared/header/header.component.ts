import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { AlertModule } from 'ngx-alerts';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private serve:AuthService,
    ) { }

  ngOnInit() {
  }

}
