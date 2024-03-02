import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AfterLoginComponent } from './auth/after-login/after-login.component';
import { ModelsComponent } from './auth/models/models.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CreateHackathonComponent } from './admin/create-hackathon/create-hackathon.component';
import { ViewHackathonsComponent } from './shared/components/view-hackathons/view-hackathons.component';
import { HackathonDetailsComponent } from './shared/components/hackathon-details/hackathon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AfterLoginComponent,
    ModelsComponent,
    SignupComponent,
    CreateHackathonComponent,
    ViewHackathonsComponent,
    HackathonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
