import { Routes } from '@angular/router';
import { TrainingHomeComponent } from './training-home/training-home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: TrainingHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },

  // هُنا نحمّل component Standalone باستخدام loadComponent
  {
    path: 'formation',
    loadComponent: () =>
      import('./formation-online/formation-online.component').then(m => m.FormationOnlineComponent)
  },

  { path: '**', redirectTo: '' }
];
