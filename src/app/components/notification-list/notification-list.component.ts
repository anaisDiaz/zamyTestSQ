import { Component, OnInit, OnDestroy } from '@angular/core';
import { Notification } from '../../models/notification.model';
import { NotificationService } from '../../services/notification-service/notification.service';
import { AuthService } from '../../services/firebase-services/auth.service';
import { AppSettings } from '../../app.settings';
import { AttendanceService } from '../../services/attendance-service/attendance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit, OnDestroy {
  notifications: Notification[] = [];
  participantId: string;
  subscriber: any;
  alert: boolean;

  constructor(private notificationService: NotificationService, private authService: AuthService,
    private attendanceService: AttendanceService, private router: Router) { }

  ngOnInit() {
    this.authService.getAuth().forEach(authUser => {
      this.participantId = authUser.email.replace(AppSettings.emailDomain, '');
      this.subscriber = this.notificationService.getAll().subscribe(notifications => {
        notifications.forEach(notification => {
          this.attendanceService.getAttendanceById(notification.eventId, this.participantId).subscribe(
            participant => {
              this.alert = true;
              if (participant.inscriptionDate !== undefined && !this.notifications.find(n => n.eventId === notification.eventId)) {
                
                this.notifications.push(notification);
              }
            }
          );
        });
      });
    });
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

  inactiveAlert() {
    this.alert = false;
  }

  goToEventDetails(eventId: string): void {
    console.log('eventId = ' + eventId);
    this.router.navigate(['event', eventId]);
  }

}
