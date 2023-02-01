import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { TriggerService } from '@app/core/services/trigger.service';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { SyncfusionModules } from '@app/shared/syncfusion.module';
import { NotificationsComponent } from './notifications.component';
import { GroupByTimePipe } from './pipes/group-by-time.pipe';
import { RealTimeNotificationsService } from './services/real-time-notifications.service';
import { SortFieldBySequencePipe } from '@app/shared/pipes/sort-field-by-sequence.pipe';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { SocketClientService } from '@app/core/services/socket-client.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { BaseService } from '@app/shared/services/base.service';
import { of } from 'rxjs';

describe('NotificationsComponent', () => {
  let component: NotificationsComponent;
  let fixture: ComponentFixture<NotificationsComponent>;
  const routerStub = {
    navigate: jest.fn().mockReturnValue(true),
  };
  const authenticationServiceMock = {
    getTenant: jest.fn().mockReturnValue(1),
  };
  const baseServiceStub = {
    getTenant: jest.fn().mockReturnValue(of([])),
    handleError: jest.fn().mockReturnValue(of([])),
    showError: jest.fn().mockReturnValue(of([])),
    get: jest.fn().mockReturnValue(of([])),
    post: jest.fn().mockReturnValue(of([])),
  };
  const realTimeNotificationServiceMock = {
    getNotificationList: jest.fn().mockReturnValue(of([])),
    getServerNotifications: jest.fn().mockReturnValue(of([])),
    updateNotification: jest.fn().mockReturnValue(of([])),
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotificationsComponent,
        GroupByTimePipe,
        SortFieldBySequencePipe,
        DateAgoPipe,
      ],
      imports: [
        SyncfusionModules,
        TranslateTestingModule.withTranslations('en', {}),
      ],
      providers: [
        TriggerService,
        GroupByTimePipe,
        SortFieldBySequencePipe,
        DateAgoPipe,
        { provide: Router, useValue: routerStub },
        {
          provide: RealTimeNotificationsService,
          useValue: realTimeNotificationServiceMock,
        },
        { provide: BaseService, useValue: baseServiceStub },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
