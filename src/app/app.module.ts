import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApartementsComponent } from './apartements/apartements.component';
import { ResidencesComponent } from './residences/residences.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApartementDetailsComponent } from './apartement-details/apartement-details.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { FormApartmentComponent } from './form-apartment/form-apartment.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowOneResidenceComponent } from './show-one-residence/show-one-residence.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ApartementsComponent,
    ResidencesComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    ApartementDetailsComponent,
    FormResidenceComponent,
    FormApartmentComponent,
    LoginComponent,
    RegisterComponent,
    ShowOneResidenceComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
