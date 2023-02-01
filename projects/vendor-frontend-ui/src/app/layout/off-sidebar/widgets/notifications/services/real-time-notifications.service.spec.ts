import { TestBed } from '@angular/core/testing';

import { RealTimeNotificationsService } from './real-time-notifications.service';

describe('RealTimeNotificationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealTimeNotificationsService = TestBed.get(
      RealTimeNotificationsService
    );
    expect(service).toBeTruthy();
  });
});
