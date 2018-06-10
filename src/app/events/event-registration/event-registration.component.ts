import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';
import { FirebaseStorageService } from '../../services/firebase-storage.service';
import { FileName } from '../../enums/file-name';
import { FolderName } from '../../enums/folder-name';
import { AppSettings } from '../../app.settings';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent implements OnInit {
  event: Event;
  uploadEvent: any;

  constructor(private eventService: EventService, private firebaseStorageService: FirebaseStorageService) { }

  ngOnInit() {
    this.event = new Event('Evento1', 'Lima,Chorrillos', new Date('February 4, 2016 14:00:00')
      , 30.69, new Date('February 4, 2016 23:59:00'), 'urlurl');
  }

  uploadImage(uploadEvent) {
    this.firebaseStorageService.uploadFile(FolderName.events + '/' + this.event.id, FileName.eventImage
      + AppSettings.imageFileExtension, uploadEvent);
      // .subscribe(url => this.event.imageURL = url);
  }

  setUploadEvent(event) {
    this.uploadEvent = event;
  }

  saveEvent() {
    this.eventService.save(this.event).then(event => {
      this.event.id = event.id;
      this.uploadImage(this.uploadEvent);
    });
  }
}
