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

}
