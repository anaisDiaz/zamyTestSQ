import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventRegistrationComponent } from './events/event-registration/event-registration.component';
import { UserRegistrationComponent } from './users/user-registration/user-registration.component';
import { UserLoginComponent } from './users/user-login/user-login.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventDetailComponent,
    EventListComponent,
    EventRegistrationComponent,
    UserRegistrationComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
