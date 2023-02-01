export class WIDGETAPICONSTANTS {
  static constants = {
    ENDPOINTS: {
      notifications: {
        getAllNotifications: '/backend/notifications/api/notification-service',
        getServerNotifications: '/topic/group',
        webSocketUrl:
          '/backend/notifications/api/notification-service/web-socket',
      },
      botService: {
        communication: '/backend/digitalassistant/bot_service',
      },
    },
  };
}
