import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  constructor(private angularFireStorage: AngularFireStorage) { }

  uploadFile(path: string, fileName: string, event): Observable<any> {
    console.log('Uploading file');
    const ref = this.angularFireStorage.ref(path + '/' + fileName);
    const task = ref.put(event.target.files[0]);
    console.log('reeef ' + ref.getDownloadURL());
    return ref.getDownloadURL();
  }
}
