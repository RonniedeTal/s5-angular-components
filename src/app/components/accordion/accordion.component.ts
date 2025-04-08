import { Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
@Component({
  selector: 'app-accordion',
  imports: [CdkAccordionModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  items = [
    'What is a Bookmark',
    'how can i request a new Browser?',
    'Is there a mobile app',
    'What about other Chromium browsers?',
  ];
  expandedIndex = 0;
}
