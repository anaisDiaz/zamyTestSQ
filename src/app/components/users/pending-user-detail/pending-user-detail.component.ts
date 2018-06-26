import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user-service/user.service';
import { AppSettings } from '../../../app.settings';
import { AuthService } from '../../../services/firebase-services/auth.service';
import { MailerService } from '../../../services/mailer-service/mailer.service';
import * as CryptoJS from 'crypto-js';
/// <reference types="crypto-js" />
import { AES } from 'crypto-js';

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
  isAdmin: boolean;
  rejectionReason: string;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute,
    private userService: UserService, private mailerService: MailerService, private router: Router) { }

  ngOnInit() {
    this.authService.getAuth().forEach(authUser => {
      this.isAdmin = authUser.email.replace(AppSettings.emailDomain, '').endsWith(AppSettings.adminSuffix);
    });
    this.routeSubscriber = this.activatedRoute.params.subscribe(params => this.pendingUserId = params['id']);
    this.userSubscriber = this.userService.getUserById(this.pendingUserId).subscribe(user => this.pendingUser = user);
  }

  approve() {
    this.pendingUser.status = 1;
    console.log(this.pendingUser.password);
    this.authService.registerUser(this.pendingUser.username, this.decrypt(this.pendingUser.password)).then(() => {
      this.userService.update(this.pendingUserId, this.pendingUser);
      console.log('usuario aprobado');
      this.mailerService.sendWelcomeMail(this.pendingUser.username + AppSettings.emailDomain, this.pendingUser.firstname);
    });
  }

  reject() {
    console.log('usuario desaprobado');
    this.mailerService.sendRejectionMail(this.pendingUser.email, this.pendingUser.firstname, this.rejectionReason);
    this.userService.deleteUserById(this.pendingUser.id);
  }

  decrypt(encryptedText: string): string {
    return AES.decrypt(encryptedText, AppSettings.key).toString(CryptoJS.enc.Utf8);
  }

  goToPendingUsersList() {
    this.router.navigate(['pending-user', 'all']);
  }

  ngOnDestroy() {
    this.routeSubscriber.unsubscribe();
  }
}
