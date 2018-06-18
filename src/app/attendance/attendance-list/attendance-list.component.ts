import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event } from '../../models/event.model';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.model';
import { AttendanceService } from '../../services/attendance.service';
import { Participant } from '../../models/participant.model';
import { EventService } from '../../services/event.service';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { AppSettings } from '../../app.settings';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.css']
})
export class AttendanceListComponent implements OnInit, OnDestroy {
  event: Event;
  eventId: string;
  participants: Participant[];
  routeSubscriber: any;
  participantsSubscriber: any;
  eventSubscriber: any;
  isAdmin: boolean;
  usernames: string[] = [];
  users: User[];

  constructor(private attendanceService: AttendanceService, private activatedRoute: ActivatedRoute,
    private eventService: EventService, private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.routeSubscriber = this.activatedRoute.params.subscribe(params => this.eventId = params['id']);
    this.eventSubscriber = this.eventService.getEventById(this.eventId).subscribe(event => this.event = event);
    this.authService.getAuth().forEach(authUser => {
      this.isAdmin = authUser.email.replace(AppSettings.emailDomain, '').endsWith(AppSettings.adminSuffix);
    });
    this.participantsSubscriber = this.attendanceService.getParticipants(this.eventId)
      .subscribe(participants => {
        this.participants = participants;
        participants.forEach(p => {
          this.usernames.push(p.id);
        });
        this.getUsers();
      });
  }

  getUsers() {
    this.userService.getUsersByUsernames(this.usernames).subscribe(users => {
      this.users = users.filter(user => user !== undefined);
    });
  }

  ngOnDestroy() {
    this.routeSubscriber.unsubscribe();
    this.eventSubscriber.unsubscribe();
    this.participantsSubscriber.unsubscribe();
  }

}
