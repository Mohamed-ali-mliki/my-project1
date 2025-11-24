import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },          // Page d'accueil
  { path: 'dashboard', component: DashboardComponent }, // Page Dashboard
  { path: 'login', component: LoginComponent },    // Page Login
  { path: 'signup', component: SignupComponent },  // Page Sign Up
  { path: '**', redirectTo: '' }                   // Redirection pour tous les chemins inconnus
];

