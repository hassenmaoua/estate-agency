import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidencesComponent } from './residences/residences.component';
import { ApartementDetailsComponent } from './apartement-details/apartement-details.component';
import { ApartementsComponent } from './apartements/apartements.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { FormApartmentComponent } from './form-apartment/form-apartment.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'residences', component: ResidencesComponent },
  { path: 'residences/add', component: FormResidenceComponent },
  { path: 'apartements', component: ApartementsComponent },
  { path: 'apartements/add', component: FormApartmentComponent },
  { path: 'apartements/update/:id', component: FormApartmentComponent },
  { path: 'apartement/:id', component: ApartementDetailsComponent },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
