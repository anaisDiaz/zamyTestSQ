import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = new User(null, null, null, 0, null, null, null, null, null);
  }

  registerUserApplication(): void {
    this.user.password = this.encrypt(this.user.password);
    this.userService.save(this.user.id, this.user);
    console.log('Se registro la solicitud del usuario');
  }

  encrypt(text: string): string {
    return text + '.';
  }

}
