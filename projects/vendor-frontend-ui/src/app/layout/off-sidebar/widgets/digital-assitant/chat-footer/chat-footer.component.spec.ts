import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TriggerService } from '@app/core/services/trigger.service';
import { SyncfusionModules } from '@app/shared/syncfusion.module';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { ChatService } from '../services/chat.service';
import { SpeechRecognitionService } from '../services/speech-recognition.service';

import { ChatFooterComponent } from './chat-footer.component';

describe('ChatFooterComponent', () => {
  let component: ChatFooterComponent;
  let fixture: ComponentFixture<ChatFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChatFooterComponent],
      providers: [SpeechRecognitionService, ChatService, TriggerService],
      imports: [
        SyncfusionModules,
        TranslateTestingModule.withTranslations('en', {}),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
