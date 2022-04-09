import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { FormTerrariumComponent } from './form_terrarium/form_terrarium.component';
import { HomeComponent } from './home/home.component';
import { GalerieComponent } from './galerie/galerie.component';



const routes: Routes = [  
{ path: '', redirectTo: '/form', pathMatch: 'full' },
{ path:'home', component: HomeComponent  },
{ path:'form', component: FormTerrariumComponent  },
{ path:'photo', component: GalerieComponent  },
{ path: 'success/:price', component: SuccessComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
