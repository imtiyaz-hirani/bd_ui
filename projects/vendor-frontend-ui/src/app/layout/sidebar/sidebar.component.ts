import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';
import { SidebarComponent as SyncSidebarComponent } from '@syncfusion/ej2-angular-navigations';
import { MenuService } from './menu/menu.service';
import { LayoutSettingsService } from './layout-settings.service';
import { menu, bottomMenu } from './menu/menu';
import { TranslateService } from '@ngx-translate/core';
import { EVENT_TYPES, ROUTER_LINKS_FULL_PATH } from '@app/core/constants';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MenuService, LayoutSettingsService],
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidebarMenuInstance')
  sidebar: SyncSidebarComponent;
  @Output('toggledSidebar')
  toggledSidebarEvent: EventEmitter<any> = new EventEmitter<any>();

  width = '200px';
  submenuWidth = '220px';
  asideContainerWidth = 200;
  dockSize = '50px';
  powerPanelCollapsedWidth = 50;
  collapsedMenuWidth = 50;
  mediaQuery = '(min-width: 600px)';
  enableDock = true;
  asideContainerPinned: boolean;
  menuItems: any[];
  bottomMenuItems: any[];
  layoutSettings: { onHoverExpandMenu: any; isOnClickSubMenu: any };
  isSubmenuActive: boolean;
  isSubmenuHover: boolean;
  activeLink: any;
  isMenuHover: boolean;
  appDetails: any;
  submenuDetails: any;
  currentSubmenuItems: any;
  searchFilter: string;

  constructor(
    public menuService: MenuService,
    private layoutSettingsService: LayoutSettingsService,
    private translateService: TranslateService,
    private router: Router
  ) {
    menuService.addMenu(menu);
    menuService.addBottomMenu(bottomMenu);
    this.menuItems = menuService.getMenu();
    this.bottomMenuItems = menuService.getBottomMenu();
    const layoutSettings = this.layoutSettingsService.getLayoutSettings();
    this.layoutSettings = {
      onHoverExpandMenu: layoutSettings.hoverExpand,
      isOnClickSubMenu: layoutSettings.clickSubMenu,
    };
    this.setCurrentActiveLink();
  }

  setCurrentActiveLink() {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        switch (event.urlAfterRedirects) {
          case ROUTER_LINKS_FULL_PATH['dashboardSummary']:
          case ROUTER_LINKS_FULL_PATH['dashboard1']:
          case ROUTER_LINKS_FULL_PATH['dashboard2']:
            this.resetIsActiveLinkState();
            const index = this.menuItems.findIndex(
              (menu) => menu.key === 'home'
            );
            if (index > -1) {
              this.menuItems[index]['isActive'] = true;
            }
            break;

          case ROUTER_LINKS_FULL_PATH['reports']:
            this.resetIsActiveLinkState();
            const menuIndex = this.menuItems.findIndex(
              (menu) => menu.key === 'reports'
            );
            if (menuIndex > -1) {
              this.menuItems[menuIndex]['isActive'] = true;
            }
            break;

          default:
            this.updateWorklistAsActive();
            break;
        }

        this.setControlPanelActive(event.urlAfterRedirects);
      }
    });
  }

  setControlPanelActive(url) {
    const masterDataUrl = `${ROUTER_LINKS_FULL_PATH.masterdata}/`;
    const settingsUrl = `${ROUTER_LINKS_FULL_PATH.settings}/`;
    // If Master Data string available within url then set Control Panel as active state
    if (url.search(masterDataUrl) !== -1 || url.search(settingsUrl) !== -1) {
      this.resetIsActiveLinkState();
      const bottomMenuIndex = this.bottomMenuItems.findIndex(
        (menu) => menu.key === 'controlPanel'
      );
      if (bottomMenuIndex > -1) {
        this.bottomMenuItems[bottomMenuIndex]['isActive'] = true;
      }
    }
  }

  ngOnInit() {
    this.appDetails = this.layoutSettingsService.getAppSetting();
  }

  onCreated(event) {
    if (this.sidebar.element.classList.contains('e-hidden')) {
      this.sidebar.element.classList.remove('e-hidden');
      this.sidebar.hide();
    }
  }

  hideSidebar() {
    this.isMenuHover = false;
    setTimeout(() => {
      if (
        !(
          this.isMenuHover ||
          this.asideContainerPinned ||
          this.isSubmenuActive ||
          this.isSubmenuHover
        )
      ) {
        this.sidebar.hide();
      }
    }, 800);
  }

  showSidebar() {
    this.isMenuHover = true;
    this.sidebar.show();
  }

  updateMenuActiveStatus(menuObj) {
    this.resetIsActiveLinkState();
    menuObj.isActive = true;
  }

  updateWorklistAsActive() {
    this.resetIsActiveLinkState();
    const worklistIndex = this.menuItems.findIndex(
      (menu) => menu.key === 'worklist'
    );
    this.menuItems[worklistIndex].isActive = true;
  }

  resetIsActiveLinkState() {
    const index = this.menuItems.findIndex((menu) => menu.isActive === true);
    if (index > -1) {
      this.menuItems[index]['isActive'] = false;
    } else {
      const bottomActiveIndex = this.bottomMenuItems.findIndex(
        (menu) => menu.isActive === true
      );
      if (bottomActiveIndex > -1) {
        this.bottomMenuItems[bottomActiveIndex]['isActive'] = false;
      }
    }
  }

  pinNavbar() {
    this.asideContainerPinned = !this.asideContainerPinned;
    if (!this.asideContainerPinned) {
      this.sidebar.hide();
    } else {
      this.sidebar.show();
    }
    this.toggledSidebarEvent.emit(this.asideContainerPinned);
  }

  showSubmenu(panelId, activeLink, submenuDetails) {
    const clientWidth = this.asideContainerWidth;
    this.isSubmenuActive = true;
    this.activeLink = activeLink;
    this.submenuDetails = submenuDetails;
    this.currentSubmenuItems = Object.assign([], this.submenuDetails.submenu);
    setTimeout(() => {
      document.getElementById(panelId).style.marginLeft = clientWidth + 'px';
      document.getElementById(panelId).style.width = this.submenuWidth;
      document.getElementById(panelId).classList.add('open');
    }, 500);
  }

  hideSubmenu(panelId, activeLink) {
    setTimeout(() => {
      if (!this.isSubmenuHover || !this.isSubmenuActive) {
        this.clearSubmenu(panelId);
      }
    }, 600);
  }

  clearSubmenu(panelId) {
    this.activeLink = '';
    this.isSubmenuActive = false;
    this.resetSubmenuWidth(panelId);
  }

  activeSubmenu(isActive, panelId) {
    this.isSubmenuActive = isActive ? true : false;
    if (!isActive) {
      this.isSubmenuHover = false;
      // setTimeout(() => {
      if (!this.isSubmenuActive || !this.isSubmenuHover) {
        this.clearSubmenu(panelId);
      }
      // }, 500)
    } else {
      this.isSubmenuHover = true;
      this.sidebar.show();
    }
  }

  resetSubmenuWidth(panelId) {
    document.getElementById(panelId).classList.remove('open');
    const clientWidth = this.collapsedMenuWidth;
    document.getElementById(panelId).style.marginLeft = clientWidth + 'px';
    document.getElementById(panelId).style.width = '0';

    setTimeout(() => {
      if (
        !(
          this.isMenuHover ||
          this.asideContainerPinned ||
          this.isSubmenuActive ||
          this.isSubmenuHover
        )
      ) {
        this.sidebar.hide();
      }
    }, 300);
  }

  logoutUser() {
    
  }

  assignCopy() {
    this.currentSubmenuItems = Object.assign([], this.submenuDetails.submenu);
  }

  filterSubmenu(event) {
    const val = event.value;
    if (!event.value) {
      this.assignCopy();
    }
    this.currentSubmenuItems = Object.assign(
      [],
      this.submenuDetails.submenu
    ).filter((item) => {
      const subItemText = this.translateService.instant(item.text);
      return subItemText.toLowerCase().indexOf(val.toLowerCase()) > -1;
    });
  }
}
