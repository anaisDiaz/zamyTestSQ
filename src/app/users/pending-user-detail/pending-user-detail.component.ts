import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-pending-user-detail',
  templateUrl: './pending-user-detail.component.html',
  styleUrls: ['./pending-user-detail.component.css']
})
export class PendingUserDetailComponent implements OnInit, OnDestroy {
  pendingUser: User;
  pendingUserId: string;
  routeSubscriber: any;
  userSubscriber: any;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.routeSubscriber = this.activatedRoute.params.subscribe(params => this.pendingUserId = params['id']);
    this.userSubscriber = this.userService.getUserById(this.pendingUserId).subscribe(user => this.pendingUser = user);
  }

  approve() {
    this.pendingUser.status = 1;
    this.userService.update(this.pendingUserId, this.pendingUser);
    console.log('usuario aprobado');
  }

  ngOnDestroy() {
    this.routeSubscriber.unsubscribe();
  }
}
