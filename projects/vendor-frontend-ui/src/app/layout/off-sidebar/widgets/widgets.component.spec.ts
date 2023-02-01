
import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { BreadcrumbData } from '@app/shared/components/breadcrumb';
import { ConfirmModalComponent } from '@app/shared/components/confirm-modal/confirm-modal.component';
import { BaseService } from '@app/shared/services/base.service';
import { SyncfusionModules } from '@app/shared/syncfusion.module';
import { MockComponent } from 'ng-mocks';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { of } from 'rxjs/internal/observable/of';

import { WidgetsComponent } from './widgets.component';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { OverviewComponent } from './overview/overview.component';
import { SearchComponent } from './search/search.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ChatsComponent } from './chats/chats.component';
import { HelpComponent } from './help/help.component';
import { DigitalAssitantComponent } from './digital-assitant/digital-assitant.component';
import { DateAgoPipe } from './notifications/pipes/date-ago.pipe';
import { GroupByTimePipe } from './notifications/pipes/group-by-time.pipe';
import { ChatPanelComponent } from './digital-assitant/chat-panel/chat-panel.component';
import { ChatFooterComponent } from './digital-assitant/chat-footer/chat-footer.component';
import { ScriptedFlowComponent } from './digital-assitant/scripted-flow/scripted-flow.component';
import { PaymentCardsComponent } from './digital-assitant/payment-cards/payment-cards.component';
import { SortFieldBySequencePipe } from '@app/shared/pipes/sort-field-by-sequence.pipe';
import { SpeechRecognitionService } from './digital-assitant/services/speech-recognition.service';
import { ChatService } from './digital-assitant/services/chat.service';
import { RealTimeNotificationsService } from './notifications/services/real-time-notifications.service';

@NgModule({
  declarations: [
    SearchComponent,
    AddTasksComponent,
    MyTasksComponent,
    NotificationsComponent,
    ChatsComponent,
    HelpComponent,
    DigitalAssitantComponent,
    ChatPanelComponent,
    ChatFooterComponent,
    ScriptedFlowComponent,
    PaymentCardsComponent,
    SortFieldBySequencePipe,
  ],
  entryComponents: [
    SearchComponent,
    AddTasksComponent,
    MyTasksComponent,
    NotificationsComponent,
    ChatsComponent,
    HelpComponent,
    DigitalAssitantComponent,
    ChatPanelComponent,
    ChatFooterComponent,
    ScriptedFlowComponent,
    PaymentCardsComponent,
    SortFieldBySequencePipe,
    ,
  ],
})
class TestModule {}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function timerGame(callback) {
  setTimeout(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    callback && callback();
  });
}

describe('WidgetsComponent', () => {
  let component: WidgetsComponent;
  let fixture: ComponentFixture<WidgetsComponent>;

  class RouterStub {
    navigate(url) {
      return url;
    }
  }

  const baseServiceStub = {
    getTenant: jest.fn().mockReturnValue(of([])),
    handleError: jest.fn().mockReturnValue(of([])),
    showError: jest.fn().mockReturnValue(of([])),
    get: jest.fn().mockReturnValue(of([])),
    post: jest.fn().mockReturnValue(of([])),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WidgetsComponent,
        MockComponent(ConfirmModalComponent),
        OverviewComponent,
        DateAgoPipe,
        GroupByTimePipe,
      ],
      imports: [
        RouterTestingModule,
        SyncfusionModules,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        GridAllModule,
        TranslateTestingModule.withTranslations('en', {}),
        CommonModule,
        // TextBoxModule,
        // ButtonModule,
        // TestModule,
      ],
      providers: [
        { provide: Router, useClass: RouterStub },
        {
          provide: ActivatedRoute,
          useValue: {},
        },
        BreadcrumbData,
        { provide: BaseService, useValue: baseServiceStub },
        SortFieldBySequencePipe,
        RealTimeNotificationsService,
        DateAgoPipe,
        GroupByTimePipe,
        ChatService,
        SpeechRecognitionService,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsComponent);
    TestBed.compileComponents();
    component = fixture.debugElement.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });
  it('should create component instance', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit', () => {
    const ngOnInitSpy = jest.spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(ngOnInitSpy).toBeCalled();
  });
});
