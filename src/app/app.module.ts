import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PublishNotifDialog, SideNavComponent, SubscribeTopicDialog } from './components/side-nav/side-nav.component';
import { SettingsComponent, AddUserDialog } from './components/settings/settings.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { AllNotifComponent } from './components/all-notif/all-notif.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    SettingsComponent,
    AddUserDialog,
    SubscribeTopicDialog,
    PublishNotifDialog,
    AllNotifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
