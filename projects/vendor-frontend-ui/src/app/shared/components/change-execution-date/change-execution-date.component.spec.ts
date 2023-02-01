import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeExecutionDateComponent } from './change-execution-date.component';

describe('ChangeExecutionDateComponent', () => {
  let component: ChangeExecutionDateComponent;
  let fixture: ComponentFixture<ChangeExecutionDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeExecutionDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeExecutionDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
