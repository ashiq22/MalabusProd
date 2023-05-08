import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable, OperatorFunction } from 'rxjs';
import { UserService } from 'src/app/_services/user.service';

const states = ['sntri'];
const state = ['TUNIS SUD-GAFSA'];


@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {
  public model: any;
  dataArray : any
  RapportVenteagence: FormGroup;
  dataRecherche: any="";
  dateVoyage = new FormControl('')
  nomLigne = new FormControl('')
  nameagency = new FormControl('')


  constructor(private userServices : UserService ,  public formBuilder: FormBuilder,) { 

    this.RapportVenteagence = this.formBuilder.group({
      dateVoyage : this.dateVoyage,
      nomLigne : this.nomLigne,
      nameagency : this.nameagency,
      
    })


  }

  ngOnInit(): void {
    this.userServices.getReservation().subscribe(data=>{
      this.dataArray = data;
    })
  }

  rapportVenteAgence () : any{ 
    let forDisplay={
      agenceName:"",
      ligne:"",
      date:"",
      nbReservedTick:""
    }
    let data = this.RapportVenteagence.getRawValue();
    let dateFortest= this.RapportVenteagence.getRawValue().dateVoyage;
    this.userServices.rapportVenteAgence(data)
    .subscribe((ticket) => {
      if(ticket.code==200){
        forDisplay.agenceName=this.RapportVenteagence.getRawValue().nameagency;
        forDisplay.ligne=this.RapportVenteagence.getRawValue().nomLigne;
        forDisplay.date=this.RapportVenteagence.getRawValue().dateVoyage;
        forDisplay.nbReservedTick=ticket.result
       this.dataRecherche = forDisplay
      }
    
    },)
  }


  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 1 ? []
      : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))

  )
  searchL: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term.length < 1 ? []
      : state.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))

  )
}
