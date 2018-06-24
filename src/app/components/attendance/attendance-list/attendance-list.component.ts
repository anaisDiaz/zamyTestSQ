import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event } from '../../../models/event.model';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../models/user.model';
import { AttendanceService } from '../../../services/attendance.service';
import { Participant } from '../../../models/participant.model';
import { EventService } from '../../../services/event.service';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/firebase-services/auth.service';
import { AppSettings } from '../../../app.settings';
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

  getUser(username: string): User {
    return this.users.find(user => user.username === username);
  }

  ngOnDestroy() {
    this.routeSubscriber.unsubscribe();
    this.eventSubscriber.unsubscribe();
    this.participantsSubscriber.unsubscribe();
  }

  sortTable(n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById('tableList');
    switching = true;
    dir = 'asc';
    while (switching) {
      switching = false;
      rows = table.getElementsByTagName('TR');

      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName('TD')[n];
        y = rows[i + 1].getElementsByTagName('TD')[n];

        if (dir === 'asc') {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

            shouldSwitch = true;
            break;
          }
        } else if (dir === 'desc') {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      } else {
        if (switchcount === 0 && dir === 'asc') {
          dir = 'desc';
          switching = true;
        }
      }
    }
  }
}
