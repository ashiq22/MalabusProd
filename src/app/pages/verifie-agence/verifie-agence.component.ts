import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgenceService } from '../../_services/agence.service';
@Component({
  selector: 'app-verifie-agence',
  templateUrl: './verifie-agence.component.html',
  styleUrls: ['./verifie-agence.component.scss']
})
export class VerifieAgenceComponent implements OnInit {
  dataArray : any

  constructor(private agenceService : AgenceService , private route : Router ,  private modalService: NgbModal) { }

  ngOnInit(): void {
    this.agenceService.getAgenceNoverifer().subscribe(data=>{
      this.dataArray = data;
    })
  }

  accepAgence(_id : any , i : number){
    


    let conf = confirm ("Vous êtes sûrs d'accepter cette agence ?")
    if(conf){
      this.agenceService.acceptAgence(_id).subscribe(data=> {
      })
    }
    this.route.navigate(['/admin/agence']);

  }

 
  delete(_id :any , i : number){
    let conf = confirm ("Vous êtes sûrs de supprimer cette agence ?")
    if(conf){
      this.agenceService.deleteAgence(_id).subscribe(data=> {
      })
    }
    this.route.navigate(['/admin/agence']);
  }
 
 
  reloadPage(){
    window.location.reload();
  }


  reloadPagAgence(){
    this.route.navigate(['/admin/agence']);

  }

  isShown: boolean = false ; // hidden by default

toggleShow() {

this.isShown = ! this.isShown;

}
  

}
