import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events1: any[] = [];


  constructor(    private router: Router
    ) { }

  ngOnInit(): void {
    this.events1 = [
      {
        status: "Commande",
        date: "15/10/2020 10:30",
        icon: PrimeIcons.SHOPPING_CART,
        color: "#9C27B0",
        image: "game-controller.jpg"
      },
      {
        status: "Analyse",
        date: "15/10/2020 14:00",
        icon: PrimeIcons.COG,
        color: "#673AB7"
      },
      {
        status: "Discussion",
        date: "15/10/2020 16:15",
        icon: PrimeIcons.ENVELOPE,
        color: "#FF9800"
      },
      {
        status: "Création",
        date: "15/10/2020 14:00",
        icon: PrimeIcons.COG,
        color: "#673AB7"
      },
      {
        status: "Envoie",
        date: "16/10/2020 10:00",
        icon: PrimeIcons.CHECK,
        color: "#607D8B"
      }
    ];
  }

  redirectForm(page:number){
    if(page==1)
      this.router.navigate(['/form']);
    if(page==2)
      this.router.navigate(['/photo']);

  }

}
