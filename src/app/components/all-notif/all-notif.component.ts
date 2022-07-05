import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-notif',
  templateUrl: './all-notif.component.html',
  styleUrls: ['./all-notif.component.css']
})
export class AllNotifComponent implements OnInit {

  constructor() { }

  notifications = [
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
