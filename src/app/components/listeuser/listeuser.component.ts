import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/services/gestion.service';

@Component({
  selector: 'app-listeuser',
  templateUrl: './listeuser.component.html',
  styleUrls: ['./listeuser.component.css']
})
export class ListeuserComponent implements OnInit {

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
