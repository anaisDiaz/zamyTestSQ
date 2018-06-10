import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';
import { FirebaseStorageService } from '../../services/firebase-storage.service';
import { FileName } from '../../enums/file-name';
import { FolderName } from '../../enums/folder-name';
import { AppSettings } from '../../app.settings';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent implements OnInit {
  event: Event;
  uploadEvent: any;
  eventForm: NgForm;

  constructor(private eventService: EventService, private firebaseStorageService: FirebaseStorageService) { }

  ngOnInit() {
    this.event= new Event('','','',new Date(),0,new Date(),'');
  }

  uploadImage(uploadEvent) {
    this.firebaseStorageService.uploadFile(FolderName.events + '/' + this.event.id, FileName.eventImage
      + AppSettings.imageFileExtension, uploadEvent);
      // .subscribe(url => this.event.imageURL = url);
  }

  setUploadEvent(event) {
    this.uploadEvent = event;
  }

  onSubmit() {
    console.log('guardando');
    console.log(this.event.date.getDay);
    this.eventService.save(this.event).then(event => {
      this.event.id = event.id;
      this.uploadImage(this.uploadEvent);
      this.resetForm();
    });
    
  }

  resetForm() {
    if (this.eventForm != null)
   this.eventForm.reset();
  }

  collectEventData(){
    this.event.name = this.eventForm.value.name;
    this.event.location = this.eventForm.value.location;
    this.event.date = this.eventForm.value.date
    this.event.imageURL = this.eventForm.value.imageURL;
    this.event.lastRegisterDate = this.eventForm.value.lastRegisterDate;
  }


}
