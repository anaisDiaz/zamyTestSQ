import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AppSettings } from '../../app.settings';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, OnDestroy {
  isAdmin: boolean;
  events: Event[];
  subscriber: any;

  constructor(private eventService: EventService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.subscriber = this.eventService.getAll().subscribe(eventList => this.events = eventList);
    this.authService.getAuth().forEach(authUser => {
      this.isAdmin = authUser.email.replace(AppSettings.emailDomain, '').endsWith(AppSettings.adminSuffix);
    });
  }

  goToEventDetails(eventId: string): void {
    this.router.navigate(['event', eventId]);
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
