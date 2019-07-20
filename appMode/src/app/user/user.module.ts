import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserpageComponent } from './userpage/userpage.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [UserpageComponent, NotAuthorizedComponent, DashboardComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class UserModule {
  constructor() {
    console.log('UserModule is loaded.');
  }

 }
