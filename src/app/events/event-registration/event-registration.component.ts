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
  // tslint:disable-next-line:no-inferrable-types
  imageUrl: string = '../assets/upload image.png';
  fileToUpload: File = null;

  constructor(private eventService: EventService, private firebaseStorageService: FirebaseStorageService) { }

  ngOnInit() {
    this.event = new Event('', '', '', new Date(), 0, new Date(), '');
  }

  uploadImage(uploadEvent) {
    this.firebaseStorageService.uploadFile(FolderName.events + '/' + this.event.id, FileName.eventImage
      + AppSettings.imageFileExtension, uploadEvent);
      // .subscribe(url => this.event.imageURL = url);
  }

  setUploadEvent(event) {
    this.uploadEvent = event;
    console.log(this.uploadEvent);
    this.fileToUpload = this.uploadEvent.target.files[0];
    // tslint:disable-next-line:prefer-const
    let reader = new FileReader();
    reader.onload = (_event: any) => {
        this.imageUrl = _event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
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
    if (this.eventForm != null) {
       this.eventForm.reset();
    }
  }

  handleFileInput(File: FileList) {
  }

}
