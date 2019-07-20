import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './login/model/user.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  current: User;

  constructor(private http:HttpClient,
    ) {this.current = new User();
    }

    registerUser(user:User):Observable<any>{
      return this.http.post<any>(environment.apiUrl,user);
    
  }
  loginuser(user:User):Observable<User>{
    return this.http.post<User> (environment.apiUrl+'login',user);
  }
   updateUser(user:User):Observable<User> {
     return this.http.put<User>(environment.apiUrl,user);
   }

}
