import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  constructor() { }

  uploadFile(fileId: string, event) {
    let ref: AngularFireStorageReference;
    let task: AngularFireUploadTask;
  }
}
