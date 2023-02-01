import { Component, OnInit, HostListener } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { enableRipple } from '@syncfusion/ej2-base';
import { POWER_PANEL, GLOBAL_NAVBAR } from './layout.config';
enableRipple(true);

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  subscription: Subscription;
  isGlobalNavbarPinned = false;
  isPowerPanelPinned = false;
  mainSectionContainerId = 'sectionContainer';

  constructor() {}

  ngOnInit(): void {}

  /**
   *
   * Section container width is adjusting based on
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const clientWidth = document.body.clientWidth;
    const currentGlobalNavbarWidth = this.isGlobalNavbarPinned
      ? GLOBAL_NAVBAR.expadedWidth
      : GLOBAL_NAVBAR.collapsedWidth;
    const currentPowerPanelWidth = this.isPowerPanelPinned
      ? POWER_PANEL.expadedWidth
      : POWER_PANEL.collapsedWidth;
    document.getElementById(this.mainSectionContainerId).style.width =
      clientWidth - currentGlobalNavbarWidth - currentPowerPanelWidth + 'px';
  }

  toggledPowerPanel(isPowerpanelPinned) {
    const clientWidth = document.body.clientWidth;
    const currentGlobalNavbarWidth = this.isGlobalNavbarPinned
      ? GLOBAL_NAVBAR.expadedWidth
      : GLOBAL_NAVBAR.collapsedWidth;
    if (isPowerpanelPinned) {
      document
        .getElementById(this.mainSectionContainerId)
        .classList.add('pinned-power-panel');
      this.isPowerPanelPinned = true;
      document.getElementById(this.mainSectionContainerId).style.width =
        clientWidth -
        POWER_PANEL.expadedWidth -
        currentGlobalNavbarWidth +
        'px';
      document.getElementById(this.mainSectionContainerId).style.marginRight =
        POWER_PANEL.expadedWidth + 'px';
    } else {
      document
        .getElementById(this.mainSectionContainerId)
        .classList.remove('pinned-power-panel');
      this.isPowerPanelPinned = false;
      document.getElementById(this.mainSectionContainerId).style.width =
        clientWidth -
        POWER_PANEL.collapsedWidth -
        currentGlobalNavbarWidth +
        'px';
      document.getElementById(this.mainSectionContainerId).style.marginRight =
        POWER_PANEL.collapsedWidth + 'px';
    }
  }

  toggledSidebar(isSidebarPinned) {
    const clientWidth = document.body.clientWidth;
    const currentPowerPanelWidth = this.isPowerPanelPinned
      ? POWER_PANEL.expadedWidth
      : POWER_PANEL.collapsedWidth;
    if (isSidebarPinned) {
      document
        .getElementById(this.mainSectionContainerId)
        .classList.add('pinned');
      this.isGlobalNavbarPinned = true;
      document.getElementById(this.mainSectionContainerId).style.width =
        clientWidth -
        GLOBAL_NAVBAR.expadedWidth -
        currentPowerPanelWidth +
        'px';
      document.getElementById(this.mainSectionContainerId).style.marginLeft =
        GLOBAL_NAVBAR.expadedWidth + 'px';
    } else {
      document
        .getElementById(this.mainSectionContainerId)
        .classList.remove('pinned');
      this.isGlobalNavbarPinned = false;
      document.getElementById(this.mainSectionContainerId).style.width =
        clientWidth -
        GLOBAL_NAVBAR.collapsedWidth -
        currentPowerPanelWidth +
        'px';
      document.getElementById(this.mainSectionContainerId).style.marginLeft =
        GLOBAL_NAVBAR.collapsedWidth + 'px';
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
