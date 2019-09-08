import { Component, OnInit } from '@angular/core';
import { PartenaireService } from 'src/app/services/partenaire.service';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Partenaire = {} ;
  imageUrl: string="/assets/img/default.png ";
  fileToUpload: File=null;
    constructor(private partenairesService :PartenaireService , private authService :AuthentificationService ,private router: Router) { }

    ngOnInit() {
    }



   /*  handleFileInput(File : FileList){
      this.fileToUpload=File.item(0);
     var reader= new FileReader();
     reader.onload=(event:any)=>{
       this.imageUrl=event.target.result;

     }
     reader.readAsDataURL(this.fileToUpload);
    } */

    onsubmit (data:any){
     console.log(data);
     console.log(this.fileToUpload);
      this.partenairesService.addPartenaire(data, this.fileToUpload)
      .subscribe(
        data=>{
          console.log('done');

        }, err=>{
         console.log(err);
        }
      )
    }

}
