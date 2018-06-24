import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event } from '../../../models/event.model';
import { AuthService } from '../../../services/firebase-services/auth.service';
import { AppSettings } from '../../../app.settings';
import { EventService } from '../../../services/event-service/event.service';
import { Router } from '@angular/router';
import { AttendanceService } from '../../../services/attendance-service/attendance.service';

@Component({
  selector: 'app-my-event-list',
  templateUrl: './my-event-list.component.html',
  styleUrls: ['./my-event-list.component.css']
})

export class MyEventListComponent implements OnInit, OnDestroy {
  subscriber: any;
  myEvents: Event[];
  isAdmin: Boolean;
  participantId: string;

  constructor(private authService: AuthService, private router: Router,
    private attendanceService: AttendanceService, private eventService: EventService) { }

  ngOnInit() {
    this.authService.getAuth().forEach(authUser => {
      this.participantId = authUser.email.replace(AppSettings.emailDomain, '');
      console.log('participantId: ' + this.participantId);
      this.isAdmin = authUser.email.replace(AppSettings.emailDomain, '').endsWith(AppSettings.adminSuffix);
      this.subscriber = this.eventService.getAll().subscribe(eventList => {
        this.myEvents = this.getMyEvents(eventList);
      });
    });

  }

  getMyEvents(events: Event[]): Event[] {
    const myEvents: Event[] = [];
    events.forEach(event => {
      this.attendanceService.getAttendanceById(event.id, this.participantId).subscribe(attendance => {
        if (attendance !== undefined) {
          myEvents.push(event);
        }
      });
    }
    );
    return myEvents;
  }

  goToEventDetails(eventId: string): void {
    this.router.navigate(['event', eventId]);
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

}
