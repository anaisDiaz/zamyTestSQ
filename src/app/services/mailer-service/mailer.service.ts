import { Injectable } from '@angular/core';
import { FirebaseDatabaseService } from '../firebase-services/firebase-database.service';
import { CollectionName } from '../../enums/collection-name';
import { AppSettings } from '../../app.settings';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  constructor(private firebaseDatabaseService: FirebaseDatabaseService) { }

  sendWelcomeMail(email: string, firstName: string) {
    this.firebaseDatabaseService.addDocumentNoId(CollectionName.mails, {
      'email': email,
      'firstName': firstName,
      'subject': AppSettings.welcomeMailSubject,
      'body': AppSettings.welcomeMailBody
    });
  }

  sendRejectionMail(email: string, firstName: string, rejectionReason: string) {
    this.firebaseDatabaseService.addDocumentNoId(CollectionName.mails, {
      'email': email,
      'firstName': firstName,
      'subject': AppSettings.rejectionMailSubject,
      'body': AppSettings.rejectionMailBody + rejectionReason
    });
  }
}
