import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AppSettings } from '../app.settings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  @Input() isAdmin: boolean;
  username: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getAuth().forEach(authUser => {
      this.username = authUser.email.replace(AppSettings.emailDomain, '').replace(AppSettings.adminSuffix, '');
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
