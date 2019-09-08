import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/services/gestion.service';

@Component({
  selector: 'app-listepartenaire',
  templateUrl: './listepartenaire.component.html',
  styleUrls: ['./listepartenaire.component.css']
})
export class ListepartenaireComponent implements OnInit {

  
  constructor(private user:GestionService) { }

  
  public users = [];
  
  ngOnInit() {

    this.user.getAlluser()
    .subscribe(
      res=>this.users = res,
      err =>console.error(err)
    );
  }
}
