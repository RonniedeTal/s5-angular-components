import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequenlyComponent } from './frequenly.component';

describe('FrequenlyComponent', () => {
  let component: FrequenlyComponent;
  let fixture: ComponentFixture<FrequenlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrequenlyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequenlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
