import { Component, OnInit } from '@angular/core';
import { PartenaireService } from 'src/app/services/partenaire.service';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouteruser',
  templateUrl: './ajouteruser.component.html',
  styleUrls: ['./ajouteruser.component.css']
})
export class AjouteruserComponent implements OnInit {
  Partenaire = {} ;
  imageUrl: string="/assets/assets/img/image.jpg";
  fileToUpload: File=null;
  profils;
    constructor(private partenairesService :PartenaireService , private authService :AuthentificationService ,private router: Router) { }

    ngOnInit() {
      this.partenairesService.getAllProfil().subscribe(
        res=>{
          //console.log(res);
          this.profils=res
         
        });
    }

    handleFileInput(File : FileList){
      this.fileToUpload=File.item(0);
     var reader= new FileReader();
     reader.onload=(event:any)=>{
       this.imageUrl=event.target.result;

     }
     reader.readAsDataURL(this.fileToUpload);
    } 

    onsubmit (data:any){
     //console.log(data);
     //console.log(this.fileToUpload);
      this.partenairesService.addUser(data, this.fileToUpload)
      .subscribe(
        data=>{
          //console.log('done');

        }, err=>{
         //console.log(err);
        }
      )
    }
}
