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
  selectedPlantNumber: number=0;
  boolFigurine: string='';
  selectedPlantType: string[]=[];
  selectedEnvironnement: string='';
  selectedPotType:string='';
  textAvis:string='';
  mail:string='';

  onSubmit() {
    this.feedbackForm = this.fb.group({
      selectedSize: ['', Validators.required],
      selectedPlantNumber: ['', Validators.required],
      boolFigurine: ['',  Validators.required],
      selectedPlantType: ['', Validators.required],
      selectedEnvironnement: ['', Validators.required],
      selectedPotType: ['', Validators.required],
      textAvis: ['', Validators.required],
      mail:  ['', [Validators.email, Validators.required]]
    });
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
