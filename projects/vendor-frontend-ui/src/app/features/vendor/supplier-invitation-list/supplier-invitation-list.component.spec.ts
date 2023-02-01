import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierInvitationListComponent } from './supplier-invitation-list.component';

describe('SupplierInvitationListComponent', () => {
  let component: SupplierInvitationListComponent;
  let fixture: ComponentFixture<SupplierInvitationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierInvitationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierInvitationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
