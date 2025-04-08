import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionsSectionComponent } from './extensions-section.component';

describe('ExtensionsSectionComponent', () => {
  let component: ExtensionsSectionComponent;
  let fixture: ComponentFixture<ExtensionsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtensionsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtensionsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
