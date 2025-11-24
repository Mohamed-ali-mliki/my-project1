import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { TrainingHomeComponent } from './app/training-home/training-home.component';
import { LoginComponent } from './app/login/login.component';
import { SignupComponent } from './app/signup/signup.component';
import { DashboardComponent } from './app/dashboard/dashboard.component'; // 1. Import the DashboardComponent

const routes = [
  { path: '', component: TrainingHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent } // 2. Add the route for 'dashboard'
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()     // ✅ الحل هنا
  ]
}).catch(err => console.error(err));
