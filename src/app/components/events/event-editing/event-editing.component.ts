import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from '../../../services/event-service/event.service';
import { FirebaseStorageService } from '../../../services/firebase-services/firebase-storage.service';
import { Event } from '../../../models/event.model';
import { FolderName } from '../../../enums/folder-name';
import { FileName } from '../../../enums/file-name';
import { AppSettings } from '../../../app.settings';
import { AuthService } from '../../../services/firebase-services/auth.service';

@Component({
  selector: 'app-event-editing',
  templateUrl: './event-editing.component.html',
  styleUrls: ['./event-editing.component.css']
})
export class EventEditingComponent implements OnInit {
  hasUploadedNewImage: boolean;
  event: Event;
  eventId: string;
  uploadEvent: any;
  eventForm: NgForm;
  imageUrl = '../assets/upload image.png';
  fileToUpload: File = null;
  routeSubscriber: any;
  eventSubscriber: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
     private eventService: EventService, private firebaseStorageService: FirebaseStorageService) { }

  ngOnInit() {
    this.routeSubscriber = this.activatedRoute.params.subscribe(params => this.eventId = params['id']);
    this.eventSubscriber = this.eventService.getEventById(this.eventId).subscribe(event =>{
      this.event = event;
    });
  }

  uploadImage(uploadEvent) {
    this.firebaseStorageService.uploadFile(FolderName.events + '/' + this.event.id, FileName.eventImage
      + AppSettings.imageFileExtension, uploadEvent).then(() => this.saveImageURL());
  }

  saveImageURL() {
    this.firebaseStorageService.getFileURL(FolderName.events + '/' + this.event.id, FileName.eventImage
      + AppSettings.imageFileExtension).subscribe(url => {
        console.log('url : ' + url);
        this.event.imageURL = url;
        console.log('event == ' + JSON.stringify(this.event));
        this.eventService.update(this.event.id, this.event);
      });
  }


  onSubmit() {
    console.log('iddd == ' + this.event.id);
    console.log('guardando');
    this.eventService.update(this.eventId, this.event);
    if (this.hasUploadedNewImage) {
      this.uploadImage(this.uploadEvent);
    }
  }

  setUploadEvent(event) {
    this.uploadEvent = event;
    this.hasUploadedNewImage = true;
    console.log(this.uploadEvent);
    this.fileToUpload = this.uploadEvent.target.files[0];
    const reader = new FileReader();
    reader.onload = (_event: any) => {
      this.imageUrl = _event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  goToEvents() {
    this.router.navigate(['event', 'all']);
  }
}

