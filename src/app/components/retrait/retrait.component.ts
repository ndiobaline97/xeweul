import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {
  
   constructor(private transaction : TransactionService) { }
  codeEnvoie;
  ngOnInit() {
  }
  
   /*submitcode (donnee:any){
    console.log(donnee);
         this.transaction.rechercheCode(donnee)
     .subscribe(
       data=>{
       console.log(data);
        this.codeEnvoie=data
      
       }, err=>{
        console.log(err);
       }
     )
   } */
}

