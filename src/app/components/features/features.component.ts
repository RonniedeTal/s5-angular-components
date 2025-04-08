import { Component } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { Tab2Component } from '../tab-2/tab-2.component';
import { Tab3Component } from '../tab-3/tab-3.component';

@Component({
  selector: 'app-features',
  imports: [
    TabComponent,
    MatTabsModule,
    MatIconModule,
    Tab2Component,
    Tab3Component,
  ],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css',
})
export class FeaturesComponent {}
