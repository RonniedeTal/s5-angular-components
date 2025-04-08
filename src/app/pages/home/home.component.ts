import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { ExtensionsSectionComponent } from '../../components/extensions-section/extensions-section.component';
import { FrequenlyComponent } from '../../components/frequenly-section/frequenly.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';
import { FooterSectionComponent } from '../../components/footer-section/footer-section.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    FeaturesComponent,
    ExtensionsSectionComponent,
    FrequenlyComponent,
    ContactSectionComponent,
    FooterSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
