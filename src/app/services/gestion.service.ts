import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  public host : string =" http://localhost:8000/api/liste";

  private Headers:any ={headers: new HttpHeaders().set("Authorization", "Bearer "+localStorage.getItem('token'))};
  
  constructor(private http : HttpClient,
    private router: Router) { }

  getAlluser() :Observable<any>{
    var Headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));
    return this.http.get<any>(this.host ,{headers: Headers} );
  }
}
