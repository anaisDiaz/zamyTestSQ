import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user-service/user.service';
import { AuthService } from '../../../services/firebase-services/auth.service';
import { AppSettings } from '../../../app.settings';

@Component({
  selector: 'app-pending-users-list',
  templateUrl: './pending-users-list.component.html',
  styleUrls: ['./pending-users-list.component.css']
})
export class PendingUsersListComponent implements OnInit, OnDestroy {
  isAdmin: boolean;
  pendingUsers: User[] = [];
  subscriber: any;

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.authService.getAuth().forEach(authUser => {
      this.isAdmin = authUser.email.replace(AppSettings.emailDomain, '').endsWith(AppSettings.adminSuffix);
    });
    this.subscriber = this.userService.getPendingUsers().subscribe(users => this.pendingUsers = users);
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

}
