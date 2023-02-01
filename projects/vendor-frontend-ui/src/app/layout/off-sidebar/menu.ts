export enum WIDGETS {
  OVERVIEW = 'overview',
  SEARCH = 'search',
  ADD = 'add-tasks',
  MY_TASKS = 'my-tasks',
  NOTIFICATIONS = 'notifications',
  CHATS = 'communication',
  HELP = 'help',
  SERRA = 'serra',
}

export const POWER_PANEL_MENU = [
  {
    key: WIDGETS.OVERVIEW,
    text: 'CORE.powerpanel.overview',
    icon: 'se-overview',
    unseen_notification: 0,
    isActive: false,
  },
  {
    key: WIDGETS.SEARCH,
    text: 'CORE.powerpanel.search',
    icon: 'se-search',
    unseen_notification: 0,
    isActive: false,
  },
  {
    key: WIDGETS.ADD,
    text: 'CORE.powerpanel.add',
    icon: 'se-add-circle',
    unseen_notification: 0,
    isActive: false,
  },
  {
    key: WIDGETS.MY_TASKS,
    text: 'CORE.powerpanel.myTask',
    icon: 'se-my-tasks',
    unseen_notification: 3,
    isActive: false,
  },
  {
    key: WIDGETS.NOTIFICATIONS,
    text: 'CORE.powerpanel.notifications',
    icon: 'se-notifications',
    unseen_notification: 0,
    isActive: false,
  },
  {
    key: WIDGETS.CHATS,
    text: 'CORE.powerpanel.chat',
    icon: 'se-chat',
    unseen_notification: 0,
    isActive: false,
  },
  {
    key: WIDGETS.HELP,
    text: 'CORE.powerpanel.help',
    icon: 'se-help',
    unseen_notification: 0,
    isActive: false,
  },
];

export const POWER_PANEL_BOTTOM_MENU = {
  key: WIDGETS.SERRA,
  text: 'CORE.powerpanel.serra',
  icon: 'se-serra',
  activeIcon: 'se-serra-bot-active',
  unseen_notification: 0,
  isActive: false,
};
