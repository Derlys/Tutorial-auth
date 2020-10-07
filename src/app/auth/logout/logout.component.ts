import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router, private service: AuthService) {}

  ngOnInit(): void {}
  logout(): void {
    this.service.logout().subscribe((res) => {
      return this.router.navigate(['/']);
    });
  }
}
