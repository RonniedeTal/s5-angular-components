import { Component } from '@angular/core';

import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-extensions-section',
  imports: [CardComponent],
  templateUrl: './extensions-section.component.html',
  styleUrl: './extensions-section.component.css',
})
export class ExtensionsSectionComponent {}
