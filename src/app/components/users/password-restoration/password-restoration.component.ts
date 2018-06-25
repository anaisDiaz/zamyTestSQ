import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/firebase-services/auth.service';
import { UserService } from '../../../services/user-service/user.service';

@Component({
  selector: 'app-password-restoration',
  templateUrl: './password-restoration.component.html',
  styleUrls: ['./password-restoration.component.css']
})
export class PasswordRestorationComponent implements OnInit, OnDestroy {
  username: string;
  subscriber: any;
  message: string;
  warningMessage: string;

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
  }

  sendRestorationEmail(): void {
    if (this.username !== undefined) {
      this.message = 'Recibiras un correo para la restauracion de tu contraseña.';
      this.subscriber = this.userService.getUserByUsername(this.username).subscribe(user => {
        this.authService.resetPassword(user.email).catch(err => console.log('error: ' + err));
      });
    } else {
      this.warningMessage = 'Ingrese un username';
      console.log('no username');
    }
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

}
