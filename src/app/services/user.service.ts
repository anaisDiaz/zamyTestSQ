import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { FirebaseDatabaseService } from './firebase-services/firebase-database.service';
import { CollectionName } from '../enums/collection-name';

@Injectable()
export class UserService {

  constructor(private firebaseDatabaseService: FirebaseDatabaseService) {
  }

  getUserById(id: string): Observable<User> {
    return this.firebaseDatabaseService.getDocumentById(CollectionName.users, id);
  }

  getUserByUsername(username: string): Observable<User> {
    return this.firebaseDatabaseService.getCollectionWhere(CollectionName.users, 'username', '==', username);
  }

  getUsersByUsernames(usernames: string[]): Observable<User[]> {
    return this.firebaseDatabaseService.getCollectionWithSpecificValues(CollectionName.users, usernames);
  }

}
