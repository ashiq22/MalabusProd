import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  dataArray : any;
  dataC : any
  addContactForm: FormGroup;


  constructor( private userServices: UserService , private modalService: NgbModal , public formBuilder: FormBuilder) {
    this.addContactForm = this.formBuilder.group({
      email_User: new FormControl(''),
      texteRep: new FormControl(''),
    })
   }

  ngOnInit(): void {
    this.userServices.getContact().subscribe(data=>{
      this.dataArray = data;
    })
  }

  open(content : any , data: any) {    
    this.dataC = data;
    this.modalService.open(content);
  }

  addContact(id: any){
    console.log( id  );
    id = this.dataC._id
    let data = this.addContactForm.getRawValue();
    this.userServices.addRep(data , id ).subscribe(() => {
    })
    window.location.reload();

  }

}
