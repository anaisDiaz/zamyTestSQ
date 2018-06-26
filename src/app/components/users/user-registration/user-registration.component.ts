import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user-service/user.service';
import { AppSettings } from '../../../app.settings';
import { FirebaseStorageService } from '../../../services/firebase-services/firebase-storage.service';
import { FolderName } from '../../../enums/folder-name';
import { FileName } from '../../../enums/file-name';
import { AES } from 'crypto-js';
/// <reference types="crypto-js" />

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
  emailDomain = AppSettings.emailDomain;

  constructor(private firebaseStorageService: FirebaseStorageService, private userService: UserService) { }

  ngOnInit() {
    this.user = new User(null, null, null, 0, null, null, null, null, null, null);
  }

  uploadImage(uploadEvent) {
    this.firebaseStorageService.uploadFile(FolderName.users + '/' + this.user.id, FileName.voucher
      + AppSettings.imageFileExtension, uploadEvent).then(() => this.saveImageURL());
  }

  saveImageURL() {
    this.firebaseStorageService.getFileURL(FolderName.users + '/' + this.user.id, FileName.voucher
      + AppSettings.imageFileExtension).subscribe(url => {
        console.log('url : ' + url);
        this.user.voucherImageURL = url;
        console.log('user = ' + JSON.stringify(this.user));
        this.userService.update(this.user.id, this.user);
      });
  }

  registerUserApplication(): void {
    this.user.role = 0;
    this.user.username = this.user.email.replace(AppSettings.emailDomain, '');
    this.user.password = this.encrypt(this.user.password);
    console.log('pass = ' + this.user.password);
    this.userService.save(this.user.id, this.user);
    this.uploadImage(this.uploadEvent);
    console.log('Se registro la solicitud del usuario');
  }

  encrypt(text: string): string {
    return AES.encrypt(text, AppSettings.key).toString();
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
