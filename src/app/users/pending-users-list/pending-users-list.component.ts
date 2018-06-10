import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-pending-users-list',
  templateUrl: './pending-users-list.component.html',
  styleUrls: ['./pending-users-list.component.css']
})
export class PendingUsersListComponent implements OnInit, OnDestroy {

  pendingUsers: User[];
  subscriber: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
  this.subscriber = this.userService.getPendingUsers().subscribe(users => this.pendingUsers = users);
  }

  ngOnDestroy() {
  this.subscriber.unsubscribe();
  }

}
