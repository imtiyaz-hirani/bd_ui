import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SyncfusionModules } from '@app/shared/syncfusion.module';
import { MockComponent } from 'ng-mocks';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { ChatPanelComponent } from './chat-panel/chat-panel.component';

import { DigitalAssitantComponent } from './digital-assitant.component';
import { ChatService } from './services/chat.service';

describe('DigitalAssitantComponent', () => {
  let component: DigitalAssitantComponent;
  let fixture: ComponentFixture<DigitalAssitantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DigitalAssitantComponent,
        MockComponent(ChatPanelComponent),
      ],
      providers: [ChatService],
      imports: [
        SyncfusionModules,
        TranslateTestingModule.withTranslations('en', {}),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalAssitantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
