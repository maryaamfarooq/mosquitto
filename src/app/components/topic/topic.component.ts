import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface Message {
  date: string;
  time: string;
  message: string;
}

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})

export class TopicComponent implements OnInit {

  constructor(private router: Router, private aRouter: ActivatedRoute) { }

  topicName!: string;

  ngOnInit(): void {
    this.topicName = this.aRouter.snapshot.paramMap.get('topicName') as string;
    console.table("UTL: " + this.topicName);
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    }
  }

  messages: Message[] = [
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
    // {
    //   date: "04/07/2022",
    //   time: "14:14",
    //   message: "test2"
    // }, 
    // {
    //   date: "04/07/2022",
    //   time: "14:14",
    //   message: "test2"
    // }, 
    // {
    //   date: "04/07/2022",
    //   time: "14:14",
    //   message: "test2"
    // }, 
    // {
    //   date: "04/07/2022",
    //   time: "14:14",
    //   message: "test2"
    // }, 
    // {
    //   date: "04/07/2022",
    //   time: "14:14",
    //   message: "test2"
    // }, 
    // {
    //   date: "04/07/2022",
    //   time: "14:14",
    //   message: "test2"
    // }, 
    // {
    //   date: "04/07/2022",
    //   time: "14:14",
    //   message: "test2"
    // }, 
    // {
    //   date: "04/07/2022",
    //   time: "14:14",
    //   message: "test2"
    // }
  ];


}
