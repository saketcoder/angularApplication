import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate  {

  constructor(private router: Router,
    private serve: AuthService)


{}

      canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) :boolean {
          if(this.serve.current != null)
            return true;
          else
          {
            this.router.navigate(['/notAuthorized']);
          }
        }

      
}
