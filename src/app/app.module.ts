import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule, routerComponents} from './app-routing/app-routing.module';

import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [
    AppComponent,
    routerComponents,
    HomeComponent,
    ContactusComponent

  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
