import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  constructor(private angularFireStorage: AngularFireStorage) { }

  uploadFile(path: string, fileName: string, event): void {
    console.log('Uploading file');
    const ref = this.angularFireStorage.ref(path + '/' + fileName);
    const task = ref.put(event.target.files[0]);
    console.log('File uploaded');
  }
}
