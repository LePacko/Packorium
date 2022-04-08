import { Component } from '@angular/core';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputMaskModule} from 'primeng/inputmask';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app-style.scss'],
})

export class AppComponent {
  public autoResize: boolean = true;

  selectedSize: string='M';
  selectedPlantNumber: number=0;
  boolFigurine: string='';
  selectedPlantType: string[]=[];
  selectedEnvironnement: string='';
  selectedPotType:string='';
  textAvis:string='';
  mail:string='';
}
