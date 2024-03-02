import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHackathonComponent } from './admin/create-hackathon/create-hackathon.component';
import { ViewHackathonsComponent } from './shared/components/view-hackathons/view-hackathons.component';
import { HackathonDetailsComponent } from './shared/components/hackathon-details/hackathon-details.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AfterLoginComponent } from './auth/after-login/after-login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'login', component: LoginComponent },
    // { path: '', component: HomeComponent },
    { path: 'create-hackathon', component: CreateHackathonComponent },
    { path: 'view-hackathons', component: ViewHackathonsComponent },
    { path: 'hackathon-details/:val', component: HackathonDetailsComponent },
    // { path: 'after-login', component: AfterLoginComponent },

    // { path: 'hackathons/:id', component: HackathonDetailsComponent },
    // { path: 'competitor/register', component: RegisterComponent },
    // { path: 'competitor/login', component: LoginComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
