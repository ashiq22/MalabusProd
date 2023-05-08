import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgenceService } from '../../_services/agence.service';

@Component({
  selector: 'app-gestion-agence',
  templateUrl: './gestion-agence.component.html',
  styleUrls: ['./gestion-agence.component.scss']
})
export class GestionAgenceComponent implements OnInit {
  dataArray : any
  constructor(private AgenceService : AgenceService , route : Router ,  private modalService: NgbModal) { }
  ngOnInit(): void {
    this.AgenceService.getAgenceVerifier().subscribe(data=>{
      this.dataArray = data;
    })
  }

 


  delete(_id :any , i : number){
    let conf = confirm ("Vous êtes sûrs de supprimer cette agence ?")
    if(conf){
      this.AgenceService.deleteAgence(_id).subscribe(data=> {
      })
    }
    window.location.reload();
  }

  openAg(content ) {
    this.modalService.open(content, { size: 'sm' });
  }

  reloadPagAgence(){
    window.location.reload();
  }

}
