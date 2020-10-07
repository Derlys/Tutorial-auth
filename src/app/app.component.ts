import { UiLink } from '@kikstart-ui/ui-link';
import { UiBrand } from '@kikstart-ui/ui-brand';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tutorial-auth';
  brand: UiBrand = {
    name: 'Site',
    logo: 'https://github.com/kikstart-ui.png',
  };
  links: UiLink[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Register', path: '/register' },
    { label: 'Login', path: '/login' },
    { label: 'Logout', path: '/logout' },
  ];
}
