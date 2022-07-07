import { Component, OnInit } from '@angular/core';

export interface Notification {
  date: string;
  time: string;
  message: string;
}

@Component({
  selector: 'app-all-notif',
  templateUrl: './all-notif.component.html',
  styleUrls: ['./all-notif.component.css']
})

export class AllNotifComponent implements OnInit {

  constructor() { }

  notifications: Notification[] = [
    {
      date: "04/07/2022",
      time: "14:14",
      message: "test1"
    }, 
    {
      date: "04/07/2022",
      time: "14:14",
      message: "test2"
    }, 
    {
      date: "04/07/2022",
      time: "14:14",
      message: "test2"
    }, 
    {
      date: "04/07/2022",
      time: "14:14",
      message: "test2"
    }
  ];

  noNotif = false;

  ngOnInit(): void {

  }

}
