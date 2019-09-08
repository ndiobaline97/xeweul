import { Injectable } from '@angular/core';
import { HttpHeaders ,HttpClient } from '@angular/common/http';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {

  constructor(private http: HttpClient, private authService: AuthentificationService) { }

  addPartenaire(partenaire, fileToUpload){

    const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem('token'));

    const host = "http://localhost:8000/api/ajout";
    const formData: FormData= new FormData();
    formData.append('username', partenaire.username);
    formData.append('entreprise', partenaire.entreprise);
    formData.append('ninea', partenaire.ninea);
    formData.append('adresse', partenaire.adresse);
    formData.append('nom', partenaire.nom);
    formData.append('telephone', partenaire.telephone);
    formData.append('plainPassword', partenaire.plainPassword);
    formData.append('email', partenaire.email);
    formData.append('telephone', partenaire.telephone);
   formData.append('imageName', fileToUpload, fileToUpload.name);

    return this.http.post(host, formData , {headers : headers});
  }


}
