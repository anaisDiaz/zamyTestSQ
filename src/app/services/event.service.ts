import { Injectable } from '@angular/core';
import { FirebaseDatabaseService } from './firebase-database.service';
import { Observable } from 'rxjs';
import { CollectionName } from '../enums/collection-name';
import { Event } from '../models/event.model';

@Injectable()
export class EventService {

  constructor(private firebaseDatabaseService: FirebaseDatabaseService) { }

  getAll(): Observable<Event[]> {
    return this.firebaseDatabaseService.getCollection(CollectionName.events);
  }

  save(event: Event): void {
    this.firebaseDatabaseService.addDocumentNoId(CollectionName.events, event);
  }

  getEventById(id: string): Observable<Event> {
    return this.firebaseDatabaseService.getDocumentById(CollectionName.events, id);
  }
}
