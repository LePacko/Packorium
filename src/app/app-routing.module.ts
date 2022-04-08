import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { FormTerrariumComponent } from './form_terrarium/form_terrarium.component';



const routes: Routes = [  
{ path:'', component: FormTerrariumComponent  },
{ path: 'success', component: SuccessComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
