import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3Component } from './tab-3.component';

describe('Tab3Component', () => {
  let component: Tab3Component;
  let fixture: ComponentFixture<Tab3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tab3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
