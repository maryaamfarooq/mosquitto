import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AllNotifComponent } from './components/all-notif/all-notif.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TopicComponent } from './components/topic/topic.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'components/settings', component: SettingsComponent},
  {path: 'components/all-notif', component: AllNotifComponent},
  {path: 'components/topic/:topicName', component: TopicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
