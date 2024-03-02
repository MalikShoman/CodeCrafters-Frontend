import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AfterLoginComponent } from './auth/after-login/after-login.component';
import { ModelsComponent } from './auth/models/models.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CreateHackathonComponent } from './admin/create-hackathon/create-hackathon.component';
import { ViewHackathonsComponent } from './shared/components/view-hackathons/view-hackathons.component';
import { HackathonDetailsComponent } from './shared/components/hackathon-details/hackathon-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [	
    AppComponent,
    LoginComponent,
    AfterLoginComponent,
    ModelsComponent,
    SignupComponent,
    CreateHackathonComponent,
    ViewHackathonsComponent,
    HackathonDetailsComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
