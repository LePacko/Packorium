import { Component, OnInit } from '@angular/core';
import { NetlifyFormsService } from '../netlify-forms/netlify-forms.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-form_terrarium',
  templateUrl: './form_terrarium.component.html',
  styleUrls: ['./form_terrarium.component.css']
})
export class FormTerrariumComponent implements OnInit{

  errorMsg = '';
  feedbackForm = this.fb.group({
  });

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  constructor(
    private primengConfig: PrimeNGConfig,
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
  price:number=0;
  

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
    this.priceEstimate();    
    console.log(this.feedbackForm.value)
    this.netlifyForms.submitFeedback(this.feedbackForm.value).subscribe(
      () => {
        this.feedbackForm.reset();
        this.router.navigate(['/success',this.price]);
      },
      err => {
        this.errorMsg = err;
      }
    );
  }
  priceEstimate(){
    this.price=0
    if(this.selectedSize==='XS'|| this.selectedSize==='S'){
      this.price+=15;
    }
    else if(this.selectedSize==='M'|| this.selectedSize=== 'L'){
      this.price+=25;
    }
    else{
      this. price+=30;
    }
    if(this.selectedPlantNumber==='1'){
      this. price+=5;
    }
    else if(this.selectedPlantNumber==='2'){
      this. price+=10;
    }
    else if(this.selectedPlantNumber==='3'){
      this.price+=15;
    }
    else{
      this.price+=20;
    }
    if(this.boolFigurine==='oui'){
      this.price+=10
    }
    if(this.selectedPlantType.includes('ficus')){
      this.price+=5
    }
    if(this.selectedPotType==='layton'){
      this.price+=10
    }
    console.log(this.price)
  }

}