import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-rapport-vente',
  templateUrl: './rapport-vente.component.html',
  styleUrls: ['./rapport-vente.component.scss']
})
export class RapportVenteComponent implements OnInit {
  dataArray : any;



  constructor(private userServices: UserService) { }

  ngOnInit(): void {
    this.userServices.getReservation().subscribe(data=>{
      this.dataArray = data;
    })
  }




}
