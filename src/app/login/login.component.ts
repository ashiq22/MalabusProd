import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  
  errorMessage = { show: false, msg: '' }
  isLoggedIn = false;
  isLoginFailed = false;
  constructor(private tokenStorage : TokenStorageService, private _router: Router, private authService: AuthService) {

  }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {    
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe(data => {
      this.tokenStorage.saveToken(data.token);
      this.tokenStorage.saveUser(data);
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this._router.navigate(['/admin/agence']);
  },  err => this.errorMessage = { show: true, msg: err.error },)
  }

 
}
