import { Routes } from '@angular/router';
import { LandingComponent } from './presentation/pages/landing/landing.component';
import { DashboardComponent } from './presentation/pages/dashboard/dashboard.component';

export const routes: Routes = [
     {path: '', component:LandingComponent},
     {path:'dashboard',component:DashboardComponent},
      
];
