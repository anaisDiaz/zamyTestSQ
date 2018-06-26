import { Injectable } from '@angular/core';
import { FirebaseDatabaseService } from '../firebase-services/firebase-database.service';
import { Observable } from 'rxjs';
import { Notification } from '../../models/notification.model';
import { CollectionName } from '../../enums/collection-name';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private firebaseDatabaseService: FirebaseDatabaseService) { }

  getAll(): Observable<Notification[]> {
    return this.firebaseDatabaseService.getCollection(CollectionName.notifications);
  }
}
