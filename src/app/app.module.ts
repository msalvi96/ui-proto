import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiSwitchModule } from 'ngx-ui-switch';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginPageComponent } from './shared-pages/login-page/login-page.component';
import { RootComponent } from './root.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RootComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    UiSwitchModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
