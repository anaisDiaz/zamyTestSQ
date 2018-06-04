import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventRegistrationComponent } from './events/event-registration/event-registration.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'event-registration', component: EventRegistrationComponent },
  { path: 'event/all', component: EventListComponent },
  { path: 'event/:id', component: EventDetailComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
