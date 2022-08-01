import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

// import { EventDataModel } from 'app/models/event.model';
import { Subscription } from 'rxjs';
import { EventMqttService } from '../../services/event.mqtt.service';
import { IMqttMessage } from "ngx-mqtt";

interface Option {
  value: string;
  viewValue: string;
}

export interface SubscribeTopicDialogData {
  topicName: string;
}

export interface PublishNotifDialogData {
  serviceURL: string;
  topicName: string;
  title: string;
  message: string;
  tags: string[];
  priority: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  allTopics: string[] = ["test", "test2", "test3"];

  topicName = "";

  events: any[] = [];
  // private deviceId: string = "";
  subscription: Subscription = new Subscription;

  pubNotif: PublishNotifDialogData = {
    serviceURL: "",
    topicName: "",
    title: "",
    message: "",
    tags: [],
    priority: "",
  }

  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  constructor(public dialog: MatDialog, private router: Router, private readonly eventMqtt: EventMqttService) { 

  }

  ngOnInit(): void {

  }

  publishNotif() : void {
    const data = {
      serviceURL: this.pubNotif.serviceURL,
      topicName: this.pubNotif.topicName,
      title: this.pubNotif.title,
      message: this.pubNotif.message,
      tags: this.pubNotif.tags,
      priority: this.pubNotif.priority,
    }

    const dialogRef = this.dialog.open(PublishNotifDialog, {
      width: '650px',
      height: '520px',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.topicName = result.topicName;
      console.log(result.topicName);
    });
  }

  allNotif() : void {
    this.router.navigateByUrl('components/all-notif');
  }

  subscribeTopic(): void {
    const dialogRef = this.dialog.open(SubscribeTopicDialog, {
      width: '580px',
      height: '300px',
      data: {topicName: this.topicName},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.topicName = result.topicName;

      // subscribe to topic
      // this.subscription = this.eventMqtt.topic(this.topicName)
      //       .subscribe((data: IMqttMessage) => {
      //         let item = JSON.parse(data.payload.toString());
      //         this.events.push(item);
      //     });



      // console.log(this.topicName);
    });
  }

  settings() : void {
    this.router.navigateByUrl('components/settings');
  }

  selectTopic(topic: string) {
    console.log(topic);
    this.router.navigateByUrl('components/topic/' + topic);
  }

}

@Component({
  selector: 'subscribe-topic',
  templateUrl: 'subscribe-topic.html',
  styleUrls: ['./side-nav.component.css']
})

export class SubscribeTopicDialog {

  subscribeDisabled = true;

  constructor(
    public dialogRef: MatDialogRef<SubscribeTopicDialog>,
    @Inject(MAT_DIALOG_DATA) public data: SubscribeTopicDialogData,
  ) {
    dialogRef.disableClose = true;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  subscribeTopicGroup = new FormGroup({
    topicControl: new FormControl('', [Validators.required])
  })

}

@Component({
  selector: 'publish-notif',
  templateUrl: 'publish-notif.html',
  styleUrls: ['./side-nav.component.css']
})

export class PublishNotifDialog {

  publishDisabled = true;

  constructor(
    public dialogRef: MatDialogRef<PublishNotifDialog>,
    @Inject(MAT_DIALOG_DATA) public data: PublishNotifDialogData,
  ) {
    dialogRef.disableClose = true;
  }

  priorities: Option[] = [
    {value: 'max-priority-0', viewValue: 'Max priority'},
    {value: 'high-priority-1', viewValue: 'High priority'},
    {value: 'default-priority-2', viewValue: 'Default priority'},
    {value: 'low-priority-3', viewValue: 'Low priority'},
    {value: 'min-priority-4', viewValue: 'Min priority'}
  ]

  selectedPriority = this.priorities[2].value;

  onCancel(): void {
    this.dialogRef.close();
  }

  publishNotifGroup = new FormGroup({
    serviceControl: new FormControl('', [Validators.required])
  })

}
