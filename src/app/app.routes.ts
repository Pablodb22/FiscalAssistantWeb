import { Routes } from '@angular/router';
import { LandingComponent } from './presentation/pages/landing/landing.component';
import { DashboardComponent } from './presentation/pages/dashboard/dashboard.component';
import { LoginComponent } from './presentation/pages/login/login.component';
import { RegisterComponent } from './presentation/pages/register/register.component';

export const routes: Routes = [
     {path: '', component:LandingComponent},
     {path:'dashboard',component:DashboardComponent},
     {path:'login',component:LoginComponent},
     {path:'registro',component:RegisterComponent},

      
];
