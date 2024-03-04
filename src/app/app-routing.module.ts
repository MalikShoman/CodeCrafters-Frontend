import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHackathonComponent } from './admin/create-hackathon/create-hackathon.component';
import { ViewHackathonsComponent } from './shared/components/view-hackathons/view-hackathons.component';
import { HackathonDetailsComponent } from './shared/components/hackathon-details/hackathon-details.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { AfterLoginComponent } from './auth/after-login/after-login.component';
import { AuthService } from './auth/auth.service';
import { AuthGurdService } from './auth/authGurd.service';
import { AdminAuthGurdService } from './auth/adminAuthGurd.service';
import { RegisterForHackathonComponent } from './shared/components/register-for-hackathon/register-for-hackathon.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signUp', component: SignupComponent, canActivate:[AuthGurdService] },
  { path: 'login', component: LoginComponent, canActivate:[AuthGurdService] },
  // { path: '', component: HomeComponent },
  { path: 'create-hackathon', component: CreateHackathonComponent ,canActivate:[AuthGurdService,AdminAuthGurdService]},
  { path: 'view-hackathons', component: ViewHackathonsComponent,canActivate:[AuthGurdService] },
  { path: 'hackathon-details', component: HackathonDetailsComponent, canActivate:[AuthGurdService] },
  { path: 'reg-for-hackathon/:id', component: RegisterForHackathonComponent, canActivate:[AuthGurdService]  },

  // { path: 'hackathons/:id', component: HackathonDetailsComponent },
  // { path: 'competitor/register', component: RegisterComponent },
  // { path: 'competitor/login', component: LoginComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
