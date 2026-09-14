import { Routes } from '@angular/router';
import { LandingComponent } from './presentation/pages/landing/landing.component';
import { DashboardComponent } from './presentation/pages/dashboard/dashboard.component';
import { AuthComponent } from './presentation/pages/auth/auth.component';


export const routes: Routes = [
     {path: '', component:LandingComponent},
     {path:'dashboard',component:DashboardComponent},
     {path:'auth',component:AuthComponent},


      
];
