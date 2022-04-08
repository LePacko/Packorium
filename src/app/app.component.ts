import { Component } from '@angular/core';
import {RadioButtonModule} from 'primeng/radiobutton';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app-style.scss'],
})
export class AppComponent {
  selectedSize: string='';
  selectedPlantNumber: number=0;
  boolFigurine: string='';
  

}
