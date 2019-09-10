import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  /* constructor( private http:HttpClient) { }

  envoie(envoye){
    const host = "http://localhost:8000/api/envoie";
  
    const formData: FormData= new FormData();
    formData.append('prenom', envoye.prenom);
    formData.append('nom', envoye.nom);
    formData.append('typePiece', envoye.typePiece);
    formData.append('numPiece', envoye.numPiece);
    formData.append('telephone', envoye.telephone);
    formData.append('prenomB', envoye.prenomB);
    formData.append('nomB', envoye.nomb);
    formData.append('telephoneB', envoye.telephoneB);


      return this.http.post(host, formData);
  }
  retrait (retrait){
    const host = "http://localhost:8000/api/retrait";
    const formData: FormData= new FormData();
    formData.append('codeEnvoie', retrait.codeEnvoie);
    formData.append('typePieceB', retrait.typePieceB);
    formData.append('numPieceB', retrait.numPieceB);

      return this.http.post(host, formData);
  } */

}
