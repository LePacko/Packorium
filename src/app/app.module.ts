import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';

import { CheckboxModule } from 'primeng/checkbox';
import {SelectButtonModule} from 'primeng/selectbutton';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputMaskModule} from 'primeng/inputmask';





@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CheckboxModule,
    SelectButtonModule,
    RadioButtonModule,
    InputTextareaModule,
    InputMaskModule,
    FormsModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }