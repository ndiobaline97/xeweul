import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
  import { from } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  jwt:string;
  username:string;
  roles:Array<string>;

  constructor(private http:HttpClient ,private router: Router
    ) { }
  private _loginUrl = "http://127.0.0.1:8000/api/login";
  
  loginUser(user)
  {
    let headers = new HttpHeaders();
    headers.append('content-type', 'application/x-www-from-urlencoded')

    return this.http.post<any>(this._loginUrl,user,{headers : headers})
  }
  loggedIn(){
    return  localStorage.getItem('token')
  }
  logout(){
    localStorage.removeItem('token');
   this.initParams();
   return  this.router.navigate(['authentification']);
  }
  parseJWT(){
    let jwtHelper= new JwtHelperService();
    let obJWT=jwtHelper.decodeToken(this.jwt);
   
    this.username=obJWT.obj;
    console.log(obJWT.roles);
    this.roles=obJWT.roles;
  }

  initParams(){
    this.jwt=undefined;
   this.username=undefined;
    this.roles=undefined;
  }

  getToken() {

    return localStorage.getItem('token')
  }
  isAdmin(){
    return this.roles.indexOf('ROLE_SUPERADMIN')>=0;
  }
  isCaissier(){
    return this.roles.indexOf('ROLE_CAISSIER')>=0;
   }

    isAdminP(){
      return this.roles.indexOf('ROLE_ADMINP')>=0;
      }

  isUser(){
    return this.roles.indexOf('ROLE_USER')>=0;
  }
  isAuthenticated(){
   return this.roles &&( this.isAdmin() || this.isUser() || this.isAdminP() || this.isCaissier() );
  }
  loadToken(){
    this.jwt=localStorage.getItem('token');
    this.parseJWT();
  }
}
