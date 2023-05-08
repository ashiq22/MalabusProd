import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'https://malabus.herokuapp.com/admin/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    return this.http.post( AUTH_API + 'login', {
      username,
      password
    });
  }
  forgetPassword(email: string): Observable<any> {
    return this.http.post(AUTH_API + 'password/forgetpassword', {
      email
    });
  }
  resetPassword(username: any, password: any, confirmPassword: any, token: any): Observable<any> {
    const obj = {
      username: username,
      password: password,
      confirmPassword: confirmPassword
    }
    return this.http.put(`${AUTH_API}` + `password/reset/${token}`, {
      username,
      password,
      confirmPassword
    });

  }
}
