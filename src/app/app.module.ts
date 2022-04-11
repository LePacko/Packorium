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
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {InputTextModule} from 'primeng/inputtext';
import {TabMenuModule} from 'primeng/tabmenu';
import { MessageModule } from 'primeng/message';
import { HomeComponent } from './home/home.component';
import { GalerieComponent } from './galerie/galerie.component';
import {TimelineModule} from 'primeng/timeline';
import { CardModule } from "primeng/card";







@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    FormTerrariumComponent,
    HomeComponent,
    GalerieComponent,
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
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    TabMenuModule,
    MessageModule,
    RippleModule,
    TimelineModule,
    CardModule

  ],
  providers: [],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }