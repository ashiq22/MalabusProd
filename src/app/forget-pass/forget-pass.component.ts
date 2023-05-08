import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, switchMap } from 'rxjs';
@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.scss']
})
export class ForgetPassComponent implements OnInit {

  refreshForget = new BehaviorSubject<boolean>(true);
  showMsg: boolean = false;
  errorMessage = {show: false , msg : ''}
  form: any = {
    email: null,
  };
  constructor(private authService : AuthService ,  private router: Router,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
  }
  forgetPass(){
    const { email } = this.form;
    this.authService.forgetPassword(email).subscribe((res: any)=>{
        this.errorMessage = {show : false , msg: "" }
        this.showMsg= true;
    },
    err=>{
      this.errorMessage = {show : true , msg : err.error}
      this.showMsg = false ;
      this.refreshForget.pipe(switchMap(_ => this.authService.forgetPassword(email)))
    }
    )
  }

}
