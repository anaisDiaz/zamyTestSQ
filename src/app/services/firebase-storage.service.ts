import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  constructor(private angularFireStorage: AngularFireStorage) { }

  uploadFile(path: string, fileName: string, event) {
    console.log('Uploading file ' + path + '/' + fileName);
    const task = this.angularFireStorage.upload(path + '/' + fileName, event.target.files[0]);
    console.log('File uploaded');
    return task;
  }

  getFileURL(path: string, fileName: string) {
    return this.angularFireStorage.ref(path + '/' + fileName).getDownloadURL();
  }
}
