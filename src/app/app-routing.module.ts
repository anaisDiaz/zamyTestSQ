import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventRegistrationComponent } from './components/events/event-registration/event-registration.component';
import { EventListComponent } from './components/events/event-list/event-list.component';
import { EventDetailComponent } from './components/events/event-detail/event-detail.component';
import { LoginComponent } from './components/login/login.component';
import { AttendanceListComponent } from './components/attendance/attendance-list/attendance-list.component';
import { PendingUsersListComponent } from './components/users/pending-users-list/pending-users-list.component';
import { PendingUserDetailComponent } from './components/users/pending-user-detail/pending-user-detail.component';
import { UserRegistrationComponent } from './components/users/user-registration/user-registration.component';
import { MyEventListComponent } from './components/users/my-event-list/my-event-list.component';
import { PasswordRestorationComponent } from './components/users/password-restoration/password-restoration.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'event/registration', component: EventRegistrationComponent },
  { path: 'event/all', component: EventListComponent },
  { path: 'event/:id', component: EventDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'event/:id/participants', component: AttendanceListComponent },
  { path: 'pending-user/all', component: PendingUsersListComponent },
  { path: 'pending-user/:id', component: PendingUserDetailComponent },
  { path: 'my-events', component: MyEventListComponent},
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'password-restoration' , component: PasswordRestorationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
