import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.scss']
})
export class GestionUtilisateurComponent implements OnInit {
  dataArray : any

  constructor(private userService : UserService ,  private modalService: NgbModal) { }

  ngOnInit(): void {
    this.userService.getAllvoyageur().subscribe(data=>{
      this.dataArray = data;
    })
  }



  delete(_id :any , i : number){
    let conf = confirm ("Vous êtes sûrs de supprimer cette utilisateur ?")
    if(conf){
      this.userService.deleteUser(_id).subscribe(data=> {
      })
    }
    window.location.reload();
  }



  openSm(content ) {
    this.modalService.open(content, { size: 'sm' });
  }
  reloadPage(){
    window.location.reload();
  }

}
