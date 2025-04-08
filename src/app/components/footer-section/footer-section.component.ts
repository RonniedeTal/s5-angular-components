import { Component, Input } from '@angular/core';
// import logo from "Imagenes/logo-bookmark.svg"
@Component({
  selector: 'app-footer-section',
  imports: [],
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.css',
})
export class FooterSectionComponent {
  logo = 'Imagenes/logo-bookmark.svg';
  facebookLogo = 'Imagenes/icon-facebook.svg';
  TwitterLogo = 'Imagenes/icon-twitter.svg';
}
