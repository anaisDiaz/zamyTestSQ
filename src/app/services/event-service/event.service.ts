import { Injectable } from '@angular/core';
import { FirebaseDatabaseService } from '../firebase-services/firebase-database.service';
import { Observable } from 'rxjs';
import { CollectionName } from '../../enums/collection-name';
import { Event } from '../../models/event.model';

@Injectable()
export class EventService {

  constructor(private firebaseDatabaseService: FirebaseDatabaseService) { }

  getAll(): Observable<Event[]> {
    // return this.firebaseDatabaseService.getCollection(CollectionName.events);
    return this.firebaseDatabaseService.getCollectionWhere(CollectionName.events, 'date', '>=', new Date());
  }


  save(event: Event): Promise<any> {
    return this.firebaseDatabaseService.addDocumentNoId(CollectionName.events, {
      name: event.name,
      description: event.description,
      location: event.location,
      date: event.date,
      price: event.price,
      lastRegisterDate: event.lastRegisterDate,
      imageURL: event.imageURL
    }, true);
  }

  update(eventId: string, event: Event) {
    this.firebaseDatabaseService.updateDocument(CollectionName.events, {
      name: event.name,
      description: event.description,
      location: event.location,
      date: event.date,
      price: event.price,
      lastRegisterDate: event.lastRegisterDate,
      imageURL: event.imageURL
    }, eventId, true);
  }


  getEventById(id: string): Observable<Event> {
    return this.firebaseDatabaseService.getDocumentById(CollectionName.events, id);
  }

}
