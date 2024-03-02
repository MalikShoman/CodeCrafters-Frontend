import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AfterLoginComponent } from './auth/after-login/after-login.component';
import { ModelsComponent } from './auth/models/models.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CreateHackathonComponent } from './admin/create-hackathon/create-hackathon.component';
import { ViewHackathonsComponent } from './shared/components/view-hackathons/view-hackathons.component';
import { HackathonDetailsComponent } from './shared/components/hackathon-details/hackathon-details.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
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
    HackathonDetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
    AppRoutingModule,
    FormsModule,
    BreadcrumbModule,
    TableModule,
    DropdownModule,
    DialogModule,
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
