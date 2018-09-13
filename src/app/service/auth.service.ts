import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    var data = "grant_type=password&" + "email=" + username + "&password=" + password;
    return this.http.post<any>('http://localhost:27891/api/auth/login/getToken', data,
    { headers: { 'Content-Type': "application/x-www-form-urlencoded" } })
      .pipe(map(user => {
        debugger;
        console.log(user);
        if (user && user.access_token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          return true;
        }

        return false;
      }));
  }
}
