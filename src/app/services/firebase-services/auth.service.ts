import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AppSettings } from '../../app.settings';

@Injectable()
export class AuthService {
  actionCodeSettings = {
    url: 'https://localhost:4200/login',
    handleCodeInApp: true
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

  resetPassword(email: string) {
    return this.angularFireAuth.auth.sendPasswordResetEmail(email, this.actionCodeSettings)
      .then(() => console.log('reset password - email sent'))
      .catch((error) => console.log(error));
  }

}
