import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'x-access-token': '${token}' })

};
const URL = 'https://malabus.herokuapp.com/admin/';
const URLF = 'https://malabus.herokuapp.com/forum/';
const URLC = 'https://malabus.herokuapp.com/user/';






@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUri: string = 'https://malabus.herokuapp.com/user';

  constructor(private http: HttpClient) { }

getAllvoyageur = ()=>{     
    return this.http.get(URL + 'findalluser',httpOptions);  }
    //deletuser
deleteUser(id : any){
  return  this.http.delete('https://malabus.herokuapp.com/admin/deleteuser/'+id , httpOptions)
}


addForum(data:any   ): Observable<any>{
  let API_URL = `https://malabus.herokuapp.com/forum/ajouterFourum/`;
  return this.http.post(API_URL ,data )
}




getForum = ()=>{     
  return this.http.get(URLF + 'listeForums',httpOptions);  }


  
getContact = ()=>{     
  return this.http.get(URLC + 'listeContact',httpOptions);  }


  addRep(data:any , id: any): Observable<any>{
     return  this.http.put('https://malabus.herokuapp.com/user/repondreContact/'+id , data )
}

getReservation = ()=>{     
  return this.http.get(URL+ 'findreservation',httpOptions);  }




  rapportVenteAgence(data: any): Observable<any> {
    let API_URL = `${this.baseUri}/test`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }



  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }



  addComments( idPost:any ,data:any  ): Observable<any>{
    return this.http.put('http://localhost:3000/forum/commentPost/'+ idPost , data )
  }
  
  
  
}



