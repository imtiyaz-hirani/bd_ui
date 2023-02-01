import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkActionModalComponent } from './bulk-action-modal.component';

describe('BulkActionModalComponent', () => {
  let component: BulkActionModalComponent;
  let fixture: ComponentFixture<BulkActionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BulkActionModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkActionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
