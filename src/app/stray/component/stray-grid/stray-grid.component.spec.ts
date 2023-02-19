import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrayGridComponent } from './stray-grid.component';

describe('StrayGridComponent', () => {
  let component: StrayGridComponent;
  let fixture: ComponentFixture<StrayGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrayGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrayGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
