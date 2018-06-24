import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventRegistrationComponent } from './components/events/event-registration/event-registration.component';
import { EventListComponent } from './components/events/event-list/event-list.component';
import { EventDetailComponent } from './components/events/event-detail/event-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FirebaseDatabaseService } from './services/firebase-services/firebase-database.service';
import { UserService } from './services/user.service';
import { EventService } from './services/event.service';
import { AttendanceListComponent } from './components/attendance/attendance-list/attendance-list.component';
import { AuthService } from './services/firebase-services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireStorageModule, AngularFireStorage } from 'angularfire2/storage';
import { AttendanceService } from './services/attendance.service';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { MyEventListComponent } from './components/users/my-event-list/my-event-list.component';

const firebaseConfig = {
  apiKey: 'AIzaSyCOu0Lwpp5d_eRnIyJHcVypT2E-UD9HF8A',
  authDomain: 'zamy-d9d98.firebaseapp.com',
  databaseURL: 'https://zamy-d9d98.firebaseio.com',
  projectId: 'zamy-d9d98',
  storageBucket: 'zamy-d9d98.appspot.com',
  messagingSenderId: '859727227209'
};

@NgModule({
  declarations: [
    AppComponent,
    EventRegistrationComponent,
    EventListComponent,
    EventDetailComponent,
    AttendanceListComponent,
    LoginComponent,
    NavigationBarComponent,
    MyEventListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AngularFireAuth,
    AngularFireStorage,
    FirebaseDatabaseService,
    UserService,
    EventService,
    AttendanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
