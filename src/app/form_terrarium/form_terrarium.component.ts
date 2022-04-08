import { Component, OnInit } from '@angular/core';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputMaskModule} from 'primeng/inputmask';
import { NetlifyFormsService } from '../netlify-forms/netlify-forms.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form_terrarium',
  templateUrl: './form_terrarium.component.html',
  styleUrls: ['./form_terrarium.component.css']
})
export class FormTerrariumComponent{

  errorMsg = '';
  feedbackForm = this.fb.group({
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private netlifyForms: NetlifyFormsService,
  ) { }

  public autoResize: boolean = true;

  selectedSize: string='M';
  selectedPlantNumber: string='0';
  boolFigurine: string='';
  selectedPlantType: string[]=[];
  selectedEnvironnement: string='';
  selectedPotType:string='';
  textAvis:string='';
  mail:string='';

  onSubmit() {
    let value="";
    for(let i of this.selectedPlantType){
      value+=i+" ";
    }
    this.feedbackForm = this.fb.group({
      selectedSize: [this.selectedSize],
      selectedPlantNumber: [this.selectedPlantNumber ],
      boolFigurine: [this.boolFigurine],
      selectedPlantType: [value ],
      selectedEnvironnement: [this.selectedEnvironnement ],
      selectedPotType: [this.selectedPotType ],
      textAvis: [this.textAvis ],
      mail:  [this.mail],
      rating: [0]

    });
    console.log(this.feedbackForm.value)
    this.netlifyForms.submitFeedback(this.feedbackForm.value).subscribe(
      () => {
        this.feedbackForm.reset();
        this.router.navigateByUrl('/success');
      },
      err => {
        this.errorMsg = err;
      }
    );
  }
}