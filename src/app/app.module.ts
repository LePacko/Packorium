import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent }   from './app.component';

import { CheckboxModule } from 'primeng/checkbox';
import {SelectButtonModule} from 'primeng/selectbutton';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputMaskModule} from 'primeng/inputmask';
import { SuccessComponent } from './success/success.component';
import { FormTerrariumComponent } from './form_terrarium/form_terrarium.component';





@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    FormTerrariumComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CheckboxModule,
    SelectButtonModule,
    RadioButtonModule,
    InputTextareaModule,
    InputMaskModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }