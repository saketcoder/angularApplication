import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginGuard } from './shared/login.guard';

const routes: Routes = [
{path:'',redirectTo:'login' ,pathMatch:"full"},
{path:'login' ,component: LoginComponent,  canActivate: [LoginGuard]},
{path:'register', component: RegisterComponent},

{path:'user', loadChildren:'./user/user.module#UserModule',  canActivate: [LoginGuard]},
{path:'admin' , loadChildren: './admin/admin.module#AdminModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
