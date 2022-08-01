import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PublishNotifDialog, SideNavComponent, SubscribeTopicDialog } from './components/side-nav/side-nav.component';
import { SettingsComponent, AddUserDialog } from './components/settings/settings.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllNotifComponent } from './components/all-notif/all-notif.component';

import { IMqttServiceOptions, MqttModule } from "ngx-mqtt";
import { EventMqttService } from './services/event.mqtt.service';
import { TopicComponent } from './components/topic/topic.component';

// export const env = {
//   production: true,
// 	hmr: false,
// 	http: {
// 		apiUrl: '<https://api.myweb.com>',
// 	},
// 	mqtt: {
// 		server: 'mqtt.myweb.com',
// 		protocol: "wss",
// 		port: 8080
// 	}
// };

const port = 8883; 
const protocol = "wss";
const server = 'test.mosquitto.org';

const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: server,
  port: port,
  protocol: protocol/*(protocol === "wss") ? "wss" : "ws"*/,
  path: '',
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    SettingsComponent,
    AddUserDialog,
    SubscribeTopicDialog,
    PublishNotifDialog,
    AllNotifComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
  ],
  providers: [
    EventMqttService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
