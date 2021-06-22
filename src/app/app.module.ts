import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './@modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// for firebase
import { environment } from 'src/environments/environment';
import firebase from 'firebase/app';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
firebase.initializeApp(environment.firebaseConfig);

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RightsidebarComponent } from './components/rightsidebar/rightsidebar.component';
import { LeftsidebarComponent } from './components/leftsidebar/leftsidebar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchappointmentComponent } from './components/searchappointment/searchappointment.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AdminleftsideComponent } from './components/admin/adminleftside/adminleftside.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AdminpanelComponent } from './components/admin/adminpanel/adminpanel.component';
import { AddappointmentComponent } from './components/admin/addappointment/addappointment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RightsidebarComponent,
    LeftsidebarComponent,
    PortfolioComponent,
    LoginComponent,
    RegisterComponent,
    SearchappointmentComponent,
    HomeComponent,
    PagenotfoundComponent,
    DashboardComponent,
    AdminleftsideComponent,
    AdminpanelComponent,
    AddappointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }