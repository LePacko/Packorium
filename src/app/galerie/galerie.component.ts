import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent implements OnInit {

  constructor(  private router: Router ) { }

  ngOnInit(): void {
  }
  redirectForm(){
    this.router.navigate(['/form']);

  }
}
