import { map } from 'rxjs/operators';
import { of, BehaviorSubject } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import { BaseService } from '@app/shared/services/base.service';
import { SocketClientService } from '@app/core/services/socket-client.service';
import { WIDGETAPICONSTANTS } from '../../constants/widget-api-constants';


@Injectable()
export class RealTimeNotificationsService
  extends BaseService
  implements OnDestroy {
  eventSource: EventSource = null;
  noticationVisibleState = new BehaviorSubject<NotificationState>({
    show: false,
  });
  notificationCountState = new BehaviorSubject(0);
  constructor(
    private socketClient: SocketClientService
  ) {
    super();
    this.getRealTimeNotificationsInit();
  }

  /**
   *Establish Socket Connection
   *
   * @memberof RealTimeNotificationsService
   */
  getRealTimeNotificationsInit() {
    const url =
      WIDGETAPICONSTANTS.constants.ENDPOINTS.notifications.webSocketUrl;
    this.socketClient.establishConnection(url);
  }

  /**
   *Get Notifications
   *
   * @return {*} 
   * @memberof RealTimeNotificationsService
   */
  getNotificationList() {
    const url =
      WIDGETAPICONSTANTS.constants.ENDPOINTS.notifications.getAllNotifications;
    return this.httpClient.get(url, {
      observe: 'body',
    });
  }
  /**
   *Update Notifications
   *
   * @param {*} data
   * @param {*} type
   * @return {*} 
   * @memberof RealTimeNotificationsService
   */
  updateNotification(data, type) {
    const url =
      WIDGETAPICONSTANTS.constants.ENDPOINTS.notifications.getAllNotifications;
    if (type === 'read') {
      return this.httpClient.post(url, data);
    } else {
      return this.httpClient.put(url, data);
    }
  }
  /**
   *Get Socket Real Time notifications
   *
   * @return {*}
   * @memberof RealTimeNotificationsService
   */
  getServerNotifications() {
    const topic =
      WIDGETAPICONSTANTS.constants.ENDPOINTS.notifications
        .getServerNotifications;
    return this.socketClient.onMessage(topic).pipe(map((data) => data));
  }
  /**
   *Show Notification Panel
   *
   * @memberof RealTimeNotificationsService
   */
  showNotificationPanel() {
    this.noticationVisibleState.next({ show: true });
  }
  /**
   *Hide Notifcation Panel
   *
   * @memberof RealTimeNotificationsService
   */
  hideNotificationPanel() {
    this.noticationVisibleState.next({ show: false });
  }
  /**
   *Set Count
   *
   * @param {*} count
   * @memberof RealTimeNotificationsService
   */
  setNotificationCount(count) {
    this.notificationCountState.next(count);
  }
  ngOnDestroy(): void {
    this.eventSource.close();
  }
}

export interface NotificationState {
  show: boolean;
}
