import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserpageComponent } from './userpage/userpage.component';
import { LoginGuard } from '../shared/login.guard';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'', component: DashboardComponent , 

  children:[
    {path: '', component: UserpageComponent},
    {path: 'profile',component: ProfileComponent },
    {path: 'notAuthorized', component: NotAuthorizedComponent},
    {path: 'userpage', component: UserpageComponent},

  ]

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
