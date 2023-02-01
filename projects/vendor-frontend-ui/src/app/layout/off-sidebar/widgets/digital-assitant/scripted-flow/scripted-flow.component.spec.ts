import {
  ComponentFactoryResolver,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TriggerService } from '@app/core/services/trigger.service';
import { of } from 'rxjs';
import { ChatService } from '../services/chat.service';

import { ScriptedFlowComponent } from './scripted-flow.component';

describe('ScriptedFlowComponent', () => {
  let component: ScriptedFlowComponent;
  let fixture: ComponentFixture<ScriptedFlowComponent>;
  const triggerServiceStub = {
    clearEvent: jest.fn().mockReturnValue(of(true)),
  };
  const chatServiceStub = {
    updateAnamoly: jest.fn().mockReturnValue(of([])),
    removeAnamoly: jest.fn().mockReturnValue(of([])),
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScriptedFlowComponent],
      providers: [
        ComponentFactoryResolver,
        { provide: TriggerService, useValue: triggerServiceStub },
        { provide: ChatService, useValue: chatServiceStub },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptedFlowComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
