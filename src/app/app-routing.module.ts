import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './@guards/auth.guard';
import { AddappointmentComponent } from './components/admin/addappointment/addappointment.component';
import { AdminpanelComponent } from './components/admin/adminpanel/adminpanel.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchappointmentComponent } from './components/searchappointment/searchappointment.component';


const routes: Routes = [
  {path:"", redirectTo: '/home', pathMatch: 'full'},
  {
    path:"home",
    component:HomeComponent,
    children:[
      {path:"",component:PortfolioComponent},
      {path:"login", component:LoginComponent},
      {path:"search-appointment",component:SearchappointmentComponent},
      {path:"register",component:RegisterComponent}
    ]
  },
  {
    path:"admin",
    component:AdminpanelComponent,
    children:[
      {path:"",component:DashboardComponent},
      {path:"add-appointment",component:AddappointmentComponent}, 
    ],
    canActivate: [AuthGuard]
  },
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }