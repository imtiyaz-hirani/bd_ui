import { TestBed, inject } from '@angular/core/testing';
import { ROUTER_LINKS_FULL_PATH } from '@app/core/constants';

import { Breadcrumb } from './breadcrumb';
import { BreadcrumbData } from './breadcrumb.data';

let breadcrumbData: BreadcrumbData;

const dashboardBreadcrumbObj = {
  key: 'dashboard',
  label: 'Dashboard',
  isCustomLabel: true,
  routerLinkUrl: ROUTER_LINKS_FULL_PATH.dashboardSummary,
};

const dashboard1BreadcrumbObj = {
  key: 'dashboard1',
  label: 'Dashboard 1',
  isCustomLabel: true,
  routerLinkUrl: ROUTER_LINKS_FULL_PATH.dashboard1,
};

const dashboard2BreadcrumbObj = {
  key: 'dashboard2',
  label: 'Dashboard 2',
  isCustomLabel: true,
  routerLinkUrl: ROUTER_LINKS_FULL_PATH.dashboard2,
};

class DummyClass extends Breadcrumb {
  constructor(breadcrumbData) {
    super(breadcrumbData);
  }

  createBreadcrumb() {
    this.breadcrumbData.pushBreadcrumbData(dashboardBreadcrumbObj);
  }
}

describe('BreadcrumbDataClass', () => {
  const breadcrumbDataInstance: BreadcrumbData = new BreadcrumbData();
  const dummyClassInstance = new DummyClass(breadcrumbDataInstance);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [BreadcrumbData],
    });
  });

  it('Breadcrumb Data instance should be created', () => {
    expect(dummyClassInstance).toBeTruthy();
  });

  it('Should create breadcrumb item', () => {
    dummyClassInstance.createBreadcrumb();
    expect(breadcrumbDataInstance.breadcrumb).toEqual([dashboardBreadcrumbObj]);
  });

  it('Should remove breadcrumb item', () => {
    dummyClassInstance.removeBreadcrumb();
    expect(breadcrumbDataInstance.breadcrumb).toEqual([]);
  });

  it('Should not remove breadcrumb item', () => {
    dummyClassInstance.createBreadcrumb();
    dummyClassInstance.removeBreadcrumb('home');
    expect(breadcrumbDataInstance.breadcrumb).toEqual([dashboardBreadcrumbObj]);
  });

  it('Should remove breadcrumb item by key', () => {
    dummyClassInstance.removeBreadcrumb('dashboard');
    expect(breadcrumbDataInstance.breadcrumb).toEqual([]);
  });

  it('Get breadcrumb index by key', () => {
    breadcrumbDataInstance.pushBreadcrumbData(dashboardBreadcrumbObj);
    breadcrumbDataInstance.pushBreadcrumbData(dashboard2BreadcrumbObj);
    const index = dummyClassInstance.getBreadcrumbIndexByKey('dashboard2');
    expect(index).toEqual(1);
  });

  it('Update breadcrumb item by key', () => {
    dummyClassInstance.removeBreadcrumb('dashboard');
    dummyClassInstance.updateBreadcrumbData(
      'dashboard2',
      dashboard1BreadcrumbObj
    );
    expect(breadcrumbDataInstance.breadcrumb).toEqual([
      dashboard1BreadcrumbObj,
    ]);
  });

  it('Clear breadcrumb ', () => {
    breadcrumbDataInstance.pushBreadcrumbData(dashboardBreadcrumbObj);
    dummyClassInstance.removeBreadcrumb();
    dummyClassInstance.clearBreadcrumbData();
    expect(breadcrumbDataInstance.breadcrumb).toEqual([]);
  });
});
