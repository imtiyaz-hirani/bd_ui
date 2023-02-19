import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStrayComponent } from './edit-stray.component';

describe('EditStrayComponent', () => {
  let component: EditStrayComponent;
  let fixture: ComponentFixture<EditStrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
