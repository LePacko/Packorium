import { Component } from '@angular/core';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputMaskModule} from 'primeng/inputmask';
import { NetlifyFormsService } from './netlify-forms/netlify-forms.service';
import { FormBuilder, Validators } from '@angular/forms';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app-style.scss'],
})

export class AppComponent {
  errorMsg = '';
  feedbackForm = this.fb.group({
  });

  constructor(
    private fb: FormBuilder,
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
    this.feedbackForm = this.fb.group({
      selectedSize: [this.selectedSize],
      selectedPlantNumber: [this.selectedPlantNumber ],
      boolFigurine: [this.boolFigurine],
      selectedPlantType: [this.selectedPlantType ],
      selectedEnvironnement: [this.selectedEnvironnement ],
      selectedPotType: [this.selectedPotType ],
      textAvis: [this.textAvis ],
      mail:  [this.mail, Validators.email],
      rating: [0, Validators.min(1)]

    });
    console.log(this.feedbackForm.value)
    this.netlifyForms.submitFeedback(this.feedbackForm.value).subscribe(
      () => {
        this.feedbackForm.reset();
        //this.router.navigateByUrl('/success');
      },
      err => {
        this.errorMsg = err;
      }
    );
  }
}
