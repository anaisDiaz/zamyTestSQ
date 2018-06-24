import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event } from '../../../models/event.model';
import { AuthService } from '../../../services/firebase-services/auth.service';
import { AppSettings } from '../../../app.settings';
import { EventService } from '../../../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-event-list',
  templateUrl: './my-event-list.component.html',
  styleUrls: ['./my-event-list.component.css']
})

export class MyEventListComponent implements OnInit, OnDestroy {
  subscriber: any;
  myEvents: Event[];
  isAdmin: Boolean;

  constructor(private authService: AuthService, private router: Router, private eventService: EventService) { }

  ngOnInit() {
    this.authService.getAuth().forEach(authUser => {
      this.isAdmin = authUser.email.replace(AppSettings.emailDomain, '').endsWith(AppSettings.adminSuffix);
    });
    this.subscriber = this.eventService.getAll().subscribe(eventList => this.myEvents = eventList);
  }

  goToEventDetails(eventId: string): void {
    this.router.navigate(['event', eventId]);
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

}
