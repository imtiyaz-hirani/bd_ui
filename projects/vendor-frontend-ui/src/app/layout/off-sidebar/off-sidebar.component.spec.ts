import { ChatService } from './widgets/digital-assitant/services/chat.service';
import { ChatFooterComponent } from './widgets/digital-assitant/chat-footer/chat-footer.component';
import { SharedModule } from './../../../../../sandbox/src/app/shared/shared.module';
import { SyncfusionModules } from './../../../../../sandbox/src/app/shared/syncfusion.module';
import { WidgetsComponent } from './../../../../../sandbox/src/app/layout/off-sidebar/widgets/widgets.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffSidebarComponent } from './off-sidebar.component';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs/internal/observable/of';
import { Sidebar, SidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/compiler';
import { WIDGETS } from './menu';

describe('OffSidebarComponent', () => {
  let component: OffSidebarComponent;
  let fixture: ComponentFixture<OffSidebarComponent>;
  let powerPanelStub: SidebarComponent;
  const chatServiceStub = {
    showBotPanel: of({
      show: true,
      param: 'search',
    }),
  };

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      declarations: [
        OffSidebarComponent,
        MockComponent(WidgetsComponent),
        MockComponent(ChatFooterComponent),
      ],
      imports: [SyncfusionModules, SharedModule],
      providers: [{ provide: ChatService, useValue: chatServiceStub }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents()));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffSidebarComponent);
    TestBed.compileComponents();
    component = fixture.debugElement.componentInstance;
    powerPanelStub = TestBed.createComponent(SidebarComponent).debugElement
      .componentInstance as SidebarComponent;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should onCreated contains e-hidden', () => {
  //   const onCreatedSpy = jest.spyOn(component, 'onCreated');
  //   component.powerPanel = powerPanelStub;
  //   component.powerPanel.element.className = 'e-hidden';
  //   component.onCreated();
  //   fixture.detectChanges();
  //   expect(component.powerPanel.element.classList).not.toEqual('e-hidden');
  //   expect(onCreatedSpy).toBeCalled();
  // });

  // it('should onCreated doesnt contains e-hidden', () => {
  //   const onCreatedSpy = jest.spyOn(component, 'onCreated');
  //   component.powerPanel.element.className = '';
  //   component.onCreated();
  //   expect(onCreatedSpy).toBeCalled();
  // });

  // it('should showDetails having activeWidget different than widgetstring', async(() => {
  //   const onCreatedSpy = jest.spyOn(component, 'showDetails');
  //   component.pinnedPowerPanel = false;
  //   component.powerPanel = powerPanelStub;
  //   const widgetstring = 'overview';
  //   component.activeWidget = 'search';
  //   fixture.detectChanges();
  //   component.showDetails(widgetstring);
  //   expect(component.activeWidget).toBe('overview');
  //   expect(onCreatedSpy).toBeCalled();
  // }));

  // it('should showDetails having activeWidget same as widgetstring', () => {
  //   const onCreatedSpy = jest.spyOn(component, 'showDetails');
  //   //component.powerPanel.show();
  //   // component.powerPanel = {
  //   //   show: jest.fn().mockReturnValue(true),
  //   //   hide: jest.fn().mockReturnValue(false),
  //   // };
  //   component.pinnedPowerPanel = true;
  //   const widgetstring = 'overview';
  //   component.activeWidget = 'overview';
  //   component.showDetails(widgetstring);
  //   expect(component.powerPanel).toBeCalled();
  //   expect(onCreatedSpy).toBeCalled();
  // });

  // it('should setWidget', () => {
  //   const setWidgetSpy = jest.spyOn(component, 'setWidget');
  //   component.setWidget('overview' as WIDGETS);
  //   expect(component.widgetType).toBe('overview');
  // });

  // it('should togglePinning', () => {
  //   const togglePinningSpy = jest.spyOn(component, 'togglePinning');
  //   component.pinnedPowerPanel = false;
  //   // component.powerPanel = powerPanelStub;
  //   fixture.detectChanges();
  //   component.togglePinning();
  //   expect(component.pinnedPowerPanel).toBeTruthy();
  // });

  // it('should setBotPanelState', () => {
  //   const setBotPanelStateSpy = jest.spyOn(component, 'setBotPanelState');
  //   component.setBotPanelState('overview');
  //   expect(setBotPanelStateSpy).toBeCalled();
  // });
});
