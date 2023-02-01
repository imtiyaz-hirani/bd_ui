import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDataDisplayComponent } from './field-data-display.component';

describe('FieldDataDisplayComponent', () => {
  let component: FieldDataDisplayComponent;
  let fixture: ComponentFixture<FieldDataDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FieldDataDisplayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
