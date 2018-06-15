import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AppSettings } from '../app.settings';

@Injectable()
export class AuthService {
  actionCodeSettings = {
    // Your redirect URL
    url: 'https://localhost:4200/login',
    handleCodeInApp: true,
    email: 'kjav2377@gmail.com'
  };

  constructor(private angularFireAuth: AngularFireAuth) { }

  registerUser(username: string, password: string): Promise<any> {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(username + AppSettings.emailDomain, password);
  }

  logout(): Promise<any> {
    return this.angularFireAuth.auth.signOut();
  }

  login(username: string, password: string): Promise<any> {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(username + AppSettings.emailDomain, password);
  }

  getAuth() {
    return this.angularFireAuth.authState.pipe(auth => auth);
  }

  sendVerificationEmail() {
    this.angularFireAuth.authState.subscribe(user => {
      user.sendEmailVerification(this.actionCodeSettings).then(() => {
        console.log('email sent');
        console.log('user email: ' + user.email);
      });
    });
  }
}
