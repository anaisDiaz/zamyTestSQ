import { Component, OnInit } from '@angular/core';
import { Notification } from '../../models/notification.model';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
  notification: Notification[] = [];

  constructor() { }

  ngOnInit() {
  }

}
