import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { first } from 'rxjs';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  form: any
  formComments: FormGroup;
  dataComm: any
  user: any
  token: any
  UserId: any
  imageUp: any
  addDateForm: FormGroup;
  data: any
  imagePath: any;
  dataArray: any = [];
  textShow: any;
  dataF: any
  id: any
  router: any;
  idPost: any;
  username: any;







  constructor(private userServices: UserService, public formBuilder: FormBuilder) {
    this.addDateForm = this.formBuilder.group({
      textepost: new FormControl(''),
    })

    this.formComments = this.formBuilder.group({
      commentText: new FormControl(''),
      commenterPseudo: new FormControl(''),

    })

  }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('auth-user')
    this.user = JSON.parse(this.token)
    this.form = this.user.user
    this.username = this.user.user.username
    this.UserId = this.user.user._id

    this.userServices.getForum().subscribe(data => {
      this.idPost = data[0]._id;      
      this.dataArray = data;

    })
  }

  addForum() {
    let dataType = {
      data: this.addDateForm.getRawValue(),
      imagePath: this.user.user.imagePath,
      username: this.user.user.username,
    };
    this.userServices.addForum(dataType).subscribe(() => {
      window.location.reload();
    })

  }

  showText() {
    this.textShow = true;

  }
  hideText() {
    this.textShow = false;
  }



  addComments() {
    this.formComments.value.commenterPseudo = this.username
    this.userServices.addComments(this.idPost, this.formComments.value)
      .pipe(first())
      .subscribe({
        next: () => {
        },
        error: error => {

        }
      });
  }




}
