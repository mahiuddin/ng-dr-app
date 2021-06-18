import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path:"",component:PortfolioComponent},
  {path:"login", component:LoginComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }