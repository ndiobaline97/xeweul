import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class interceptorService {

  constructor(private injector:Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let authService = this.injector.get(AuthentificationService)
    //console.log(authService.getToken());
    const headers= new HttpHeaders;
    headers.append('content-type', 'application/json');
    const token =authService.getToken() ;
    headers.append('Authorization', 'Bearer ' + token);
    //alert(token);
    
    let tokenizedReq=request.clone(
   {
    setHeaders: {
        'Authorization': Bearer ${token}
    }
   })
   return next.handle(tokenizedReq);
}


