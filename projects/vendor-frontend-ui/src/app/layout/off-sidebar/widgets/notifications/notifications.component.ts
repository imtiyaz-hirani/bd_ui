
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Common } from '@app/core/common';
import { ROUTER_LINKS_FULL_PATH } from '@app/core/constants';
import { TriggerService } from '@app/core/services/trigger.service';
import { ToastMessageComponent } from '@app/shared/components/toast-message/toast-message.component';
import { mergeMap } from 'rxjs/operators';
import { POWER_PANEL_MENU, WIDGETS } from '../../menu';
import { GroupByTimePipe } from '../notifications/pipes/group-by-time.pipe';
import { RealTimeNotificationsService } from './services/real-time-notifications.service';
@Component({
  selector: 'widget-notifications',
  styleUrls: ['./notifications.component.scss'],
  templateUrl: './notifications.component.html',
})
export class NotificationsComponent implements OnInit {
  @Input() widgetType: string;
  WIDGETS = WIDGETS;
  notificationsList = [];
  groupedNotificationsList = [];
  constructor(
    public realTimeNotificationService: RealTimeNotificationsService,
    private groupByTimePipe: GroupByTimePipe,
    private router: Router,
    private triggerService: TriggerService
  ) {}

  ngOnInit() {
    this.getNotifications();
  }

  getNotifications() {
    const initNotificationList$ = this.realTimeNotificationService.getNotificationList();
    const getNotificationObject$ = this.realTimeNotificationService.getServerNotifications();
    initNotificationList$
      .pipe(
        mergeMap((initData: any) => {
          this.notificationsList = [...initData];
          this.updateNotificationCount();
          // this.generateDummyRandomNotifications();
          //  this.showNotificationToast();
          return getNotificationObject$;
        })
      )
      .subscribe((res) => {
        if (res.read === false && res.closed === false) {
          this.notificationsList.unshift(res);
          this.updateNotificationCount();
          this.showNotificationToast(res);
        }
      });
  }

  updateNotificationCount() {
    const notificationIdx: number = POWER_PANEL_MENU.findIndex(
      (idx) => idx.key === WIDGETS.NOTIFICATIONS
    );
    POWER_PANEL_MENU[
      notificationIdx
    ].unseen_notification = this.notificationsList.length;
    this.groupedNotificationsList = this.groupByTimePipe.transform(
      this.notificationsList
    );
  }
  /**
   * Clears all notifications
   */
  clearAllNotifications() {
    this.notificationsList.forEach((notification) => {
      notification.closed = true;
    });
    this.realTimeNotificationService
      .updateNotification(this.notificationsList, 'close')
      .subscribe((res) => {
        this.notificationsList = [];
        this.updateNotificationCount();
      });
  }
  /**
   * Closes each notification
   *
   * @param item;
   * @param groupIdx;
   */
  closeEachNotification(item, groupIdx) {
    item.closed = true;
    const currNotifIndx = this.notificationsList.indexOf(item);
    const grpNotificationIndex = this.groupedNotificationsList[
      groupIdx
    ].notifications.indexOf(item);
    this.notificationsList.splice(currNotifIndx, 1);
    this.groupedNotificationsList[groupIdx].notifications.splice(
      grpNotificationIndex,
      1
    );
    this.realTimeNotificationService
      .updateNotification([item], 'close')
      .subscribe((res) => {
        this.updateNotificationCount();
      });
  }
  searchFilter(event) {}
  /**
   * Determines whether floating notification action on
   *
   * @param event;
   */
  onFloatingNotificationAction(event) {
    if (event.action === 'viewDetails') {
      this.viewDetails(event.notification);
    } else {
      this.assistBySerra(event.notification);
    }
  }
  /**
   * Views details
   *
   * @param notificationItem;
   */
  viewDetails(notificationItem) {
    const redirectUrl = Common.sprintf(
      ROUTER_LINKS_FULL_PATH.paymentFileDetailsItems,
      [notificationItem.messageKeywords.fileId]
    );
    this.router.navigate([redirectUrl], { queryParams: { isAnomalous: true } });
    this.updateNotificationStatus(notificationItem);
  }
  /**
   * Assists by serra
   *
   * @param notificationItem;
   */
  assistBySerra(notificationItem) {
    this.triggerService.setEvent({ serraMessage: notificationItem.message });
    this.updateNotificationStatus(notificationItem);
  }

  /**
   * Updates notification status
   *
   * @param notification;
   */
  updateNotificationStatus(notification) {
    notification.read = true;
    this.realTimeNotificationService
      .updateNotification(notification, 'read')
      .subscribe((res) => {
        const dataIdx = this.notificationsList.indexOf(res);
        if (dataIdx !== -1) {
          this.notificationsList[dataIdx] = res;
        }
      });
  }

  /**
   * Shows notification toast when any new notification arrives in system
   */
  showNotificationToast(obj) {
  }
  /**
   * Generates dummy random notifications
   */
  generateDummyRandomNotifications() {
    const fakeNotifications = [
      {
        id: '5f4f5ba60a68fa7585804ae7',
        createdDate: '2020-09-02T09:02:34.157+00:00',
        createdBy: null,
        lastModifiedDate: '2020-09-04T09:02:34.157+00:00',
        lastModifiedBy: null,
        objectId: '5f4f5ba1e3ae907a83c28ff4',
        read: true,
        closed: false,
        infoCategory: 'PAYMENT_MESSAGE',
        eventId: 'Anomalous items notification',
        messageKeywords: {
          anomalyCount: 5,
          fileId: 'IM2725',
        },
        message:
          'The connector SAP Live did not receive any files for over 24 hours',
        actions: [{ actionName: 'Call' }, { actionName: 'Setting' }],
      },
      {
        id: '5f4f5ba60a68fa7585804ae7',
        createdDate: '2020-09-04T09:02:34.157+00:00',
        createdBy: null,
        lastModifiedDate: '',
        lastModifiedBy: null,
        objectId: '5f4f5ba1e3ae907a83c28ff4',
        read: true,
        closed: false,
        infoCategory: 'PAYMENT_MESSAGE',
        eventId: 'Anomalous items notification',
        messageKeywords: {
          anomalyCount: 5,
          fileId: 'IM2725',
        },
        message: 'A bank statement with an unknown account was received.',
        actions: [{ actionName: 'Show in control ' }],
      },
      {
        id: '5f4f5ba60a68fa7585804bd7',
        createdDate: '2020-09-09T09:02:34.157+00:00',
        createdBy: null,
        lastModifiedDate: '2020-09-22T09:02:34.157+00:00',
        lastModifiedBy: null,
        objectId: '5f4f5ba1e3ae907a83c28vf3',
        read: true,
        closed: false,
        infoCategory: 'COLLECTION_MANAGEMENT',
        eventId: 'Anomalous items notification',
        message: 'Please approve an transfer to an External agency',
        actions: [{ actionName: 'Approve' }],
      },
      {
        id: '5f4f5ba60a68fa7585804zs7',
        createdDate: '2020-09-09T09:02:34.157+00:00',
        createdBy: null,
        lastModifiedDate: '2020-09-22T09:02:34.157+00:00',
        lastModifiedBy: null,
        objectId: '5f4f5ba1e3ae907n83v28vf3',
        read: true,
        closed: false,
        infoCategory: 'COLLECTION_MANAGEMENT',
        eventId: 'Anomalous items notification',
        message: 'Please check the status File could not be delivered.',
        actions: [{ actionName: 'Check' }],
      },
    ];
    fakeNotifications.forEach((notif) => {
      const randomNumber = Math.floor(
        Math.random() * this.notificationsList.length - 1
      );
      const randomIndex =
        randomNumber < 0 ? this.notificationsList.length - 1 : randomNumber;
      this.notificationsList.splice(randomIndex, 0, notif);
    });
    this.updateNotificationCount();
  }
}
