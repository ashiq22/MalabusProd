import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'x-access-token': '${token}' })
};
const URL = 'https://malabus.herokuapp.com/admin/';
@Injectable({
  providedIn: 'root'
})
export class AgenceService {
  constructor(private http: HttpClient) { }
  getAgenceVerifier = () => {
    return this.http.get(URL + 'findagency_verified', httpOptions);
  }

  getAgenceNoverifer = () => {
    return this.http.get(URL + 'findagency_not_verified', httpOptions);
  }

  deleteAgence(id: any) {
    return this.http.delete('https://malabus.herokuapp.com/admin/refused_agency/' + id, httpOptions)
  }

  acceptAgence(id: any) {
    return this.http.put('https://malabus.herokuapp.com/admin/add_agency/' + id, httpOptions)
  }

}

