import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { SidebarComponent as SyncSidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { POWER_PANEL_MENU, WIDGETS, POWER_PANEL_BOTTOM_MENU } from './menu';
import { ChatService } from './widgets/digital-assitant/services/chat.service';

@Component({
  selector: 'app-off-sidebar',
  templateUrl: './off-sidebar.component.html',
  styleUrls: ['./off-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OffSidebarComponent implements OnInit {
  @ViewChild('powerpanelInstance')
  powerPanel: SyncSidebarComponent;
  @Output('toggledPowerPanel')
  toggledPowerPanelEvent: EventEmitter<any> = new EventEmitter<any>();

  position = 'Right';
  width = '410px';
  dockSize = '50px';
  enableDock = true;
  pinnedPowerPanel = false;
  powerPanelMenuList = POWER_PANEL_MENU;
  widgetType = WIDGETS.OVERVIEW;
  WIDGETS = WIDGETS;
  powerPanelBottomMenu = POWER_PANEL_BOTTOM_MENU;

  isCloseOnDocumentClick = true;
  activeWidget;
  constructor(private chatService: ChatService) {}

  /**
   *
   * Show bot Panel when ngOnInit
   * @memberof OffSidebarComponent
   */
  ngOnInit(): void {
    this.chatService.showBotPanel.subscribe((res) => {
      if (res.show) {
        this.showDetails(res.param);
      }
    });
  }

  /**
   *
   *
   * @memberof OffSidebarComponent
   */
  onCreated(): void {
    if (this.powerPanel.element.classList.contains('e-hidden')) {
      this.powerPanel.element.classList.remove('e-hidden');
      this.powerPanel.hide();
    }
  }
  /**
   *
   *
   * @param {string} [widgetKey]
   * @returns {*}  {void}
   * @memberof OffSidebarComponent
   */
  showDetails(widgetKey?: string): void {
    if (this.activeWidget === widgetKey && this.powerPanel.isOpen) {
      if (!this.pinnedPowerPanel) {
        if (widgetKey === POWER_PANEL_BOTTOM_MENU.key) {
          this.powerPanelBottomMenu.isActive = false;
        } else {
          const index = this.powerPanelMenuList.findIndex(
            (element) => element.key === widgetKey
          );
          this.powerPanelMenuList[index]['isActive'] = false;
        }
        this.activeWidget = null;
        this.powerPanel.hide();
      }
      return;
    }

    if (this.activeWidget === widgetKey) {
      this.powerPanel.show();
      return;
    }

    this.activeWidget = widgetKey;
    if (widgetKey) {
      this.setWidget(widgetKey as WIDGETS);
    }
    this.powerPanel.show();
  }

  /**
   *
   *
   * @param {WIDGETS} widgetKey
   * @returns {*}  any
   * @memberof OffSidebarComponent
   */
  setWidget(widgetKey: WIDGETS): any {
    const tempArr = this.powerPanelMenuList.filter((element) => {
      if (element.isActive && element.key !== widgetKey) {
        element.isActive = false;
        return element;
      } else if (element.key === widgetKey) {
        element.isActive = true;
        return element;
      }
      return element;
    });
    this.powerPanelMenuList = Object.assign([], tempArr);
    if (widgetKey === POWER_PANEL_BOTTOM_MENU.key) {
      this.powerPanelBottomMenu.isActive = true;
    } else {
      this.powerPanelBottomMenu.isActive = false;
    }
    this.widgetType = widgetKey;
  }

  /**
   *
   *
   * @memberof OffSidebarComponent
   */
  togglePinning(): void {
    this.pinnedPowerPanel = !this.pinnedPowerPanel;
    this.toggledPowerPanelEvent.emit(this.pinnedPowerPanel);
    this.isCloseOnDocumentClick = !this.pinnedPowerPanel;
  }

  /**
   *
   *
   * @param {*} event
   * @memberof OffSidebarComponent
   */
  setBotPanelState(event): void {
    if (event) {
      this.setWidget(event);
    }
  }
}
