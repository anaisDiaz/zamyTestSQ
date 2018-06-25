import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user-service/user.service';
import { AuthService } from '../../../services/firebase-services/auth.service';
import { AppSettings } from '../../../app.settings';


const emailDomain = AppSettings.emailDomain;

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})

export class UserRegistrationComponent implements OnInit {
  user: User;
  uploadEvent: any;
  imageUrl = '../assets/upload image.png';
  fileToUpload: File = null;

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.user = new User(null, null, null, 0, null, null, null, null, null);
  }

  registerUserApplication(): void {
    this.user.email = this.user.username + AppSettings.emailDomain;
    this.user.password = this.encrypt(this.user.password);
    this.userService.save(this.user.id, this.user);
    console.log('Se registro la solicitud del usuario');
  }

  encrypt(text: string): string {
    return text + '.';
  }

  setUploadEvent(event) {
    this.uploadEvent = event;
    console.log(this.uploadEvent);
    this.fileToUpload = this.uploadEvent.target.files[0];
    const reader = new FileReader();
    reader.onload = (_event: any) => {
      this.imageUrl = _event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

}
