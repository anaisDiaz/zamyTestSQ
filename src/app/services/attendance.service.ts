import { Injectable } from '@angular/core';
import { FirebaseDatabaseService } from './firebase-services/firebase-database.service';
import { Observable } from 'rxjs';
import { CollectionName } from '../enums/collection-name';
import { Participant } from '../models/participant.model';

@Injectable()
export class AttendanceService {

  constructor(private firebaseDatabaseService: FirebaseDatabaseService) { }

  getParticipants(eventId: string): Observable<Participant[]> {
    return this.firebaseDatabaseService.getCollection(CollectionName.events + '/' + eventId + '/' + CollectionName.participants);
  }

  saveAttendance(eventId: string, participant: Participant) {
    this.firebaseDatabaseService.addDocument(CollectionName.events + '/' + eventId + '/' + CollectionName.participants,
      participant, participant.id);
  }
}
