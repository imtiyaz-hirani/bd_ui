import { TestBed } from '@angular/core/testing';
import { ROUTER_LINKS_FULL_PATH } from '@app/core/constants';

import { BreadcrumbData } from './breadcrumb.data';

const dashboardBreadcrumbObj = {
  label: 'Dashboard',
  isCustomLabel: true,
  routerLinkUrl: ROUTER_LINKS_FULL_PATH.dashboardSummary,
};

const dashboard2BreadcrumbObj = {
  label: 'Dashboard 2',
  isCustomLabel: true,
  routerLinkUrl: ROUTER_LINKS_FULL_PATH.dashboard1,
};

describe('BreadcrumbDataClass', () => {
  let breadcrumbDataInstance: BreadcrumbData = new BreadcrumbData();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [BreadcrumbData],
    });
    breadcrumbDataInstance = TestBed.get(BreadcrumbData);
  });

  it('Breadcrumb Data instance should be created', () => {
    expect(breadcrumbDataInstance).toBeTruthy();
  });

  it('Should create breadcrumb item', () => {
    breadcrumbDataInstance.pushBreadcrumbData(dashboardBreadcrumbObj);
    expect(breadcrumbDataInstance.breadcrumb).toEqual([dashboardBreadcrumbObj]);
  });

  it('Should remove breadcrumb item', () => {
    breadcrumbDataInstance.pushBreadcrumbData(dashboard2BreadcrumbObj);
    expect(breadcrumbDataInstance.breadcrumb).toEqual([
      dashboard2BreadcrumbObj,
    ]);
    breadcrumbDataInstance.popBreadcrumbData();
    expect(breadcrumbDataInstance.breadcrumb).toEqual([]);
  });

  it('Should clear breadcrumb item', () => {
    breadcrumbDataInstance.pushBreadcrumbData(dashboardBreadcrumbObj);
    breadcrumbDataInstance.pushBreadcrumbData(dashboard2BreadcrumbObj);
    breadcrumbDataInstance.clearBreadCrumb();
    expect(breadcrumbDataInstance.breadcrumb).toEqual([]);
  });
});
