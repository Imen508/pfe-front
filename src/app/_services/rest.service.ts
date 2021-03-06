import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const API_URL = 'http://localhost:3000/api/vendeurs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getVendeur(vendeur): Observable<any>{
    return this.http.get(API_URL +'getVendeur')
  }
}
