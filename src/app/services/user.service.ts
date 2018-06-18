import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { FirebaseDatabaseService } from './firebase-database.service';
import { CollectionName } from '../enums/collection-name';

@Injectable()
export class UserService {

  constructor(private firebaseDatabaseService: FirebaseDatabaseService) {
  }

  getUserById(id: string): Observable<User> {
    return this.firebaseDatabaseService.getDocumentById(CollectionName.users, id);
  }

  getUserByUsername(username: string): Observable<User> {
    return this.firebaseDatabaseService.getDocumentWhere(CollectionName.users, 'username', '==', username);
  }

  getPendingUsers(): Observable<User[]> {
    return this.firebaseDatabaseService.getDocumentWhere(CollectionName.users, 'status', '==', 0);
  }

  update(userId: string, user: User) {
    this.firebaseDatabaseService.updateDocument(CollectionName.users, user, userId);
  }

  save(userId: string, user: User) {
    this.firebaseDatabaseService.addDocument(CollectionName.users, user, userId);
  }
  getUsersByUsernames(usernames: string[]): Observable<User[]> {
    return this.firebaseDatabaseService.getCollectionWhere(CollectionName.users, usernames);
  }

}
