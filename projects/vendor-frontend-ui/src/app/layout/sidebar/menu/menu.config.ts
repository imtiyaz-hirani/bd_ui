import { ROUTER_LINKS_FULL_PATH } from '@app/core/constants';

enum SUBMODULES_LEVEL {
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
}

export const MODULE_ID = {
  home: 1000,
  dashboard: 2000,
  worklist: 3000,
  payments: 3100,
  paymentFiles: 3101,
  paymentItems: 3102,
  bankStatements: 3103,
  bankStatus: 3104,
  intradayStatements: 3105,
  others: 3106,
  accountStatements: 3107,
  accountStatementMessages: 3108,
  statementItems: 3109,
  controlCenter: 3110,
  unknownAccounts: 3111,
  cashApp: 3200,
  fileTracker: 3201,
  contentTracker: 3202,
  postProcessing: 3203,
  processingReport: 3204,
  cashAppPayments: 3205,
  openItems: 3206,
  accountsPayable: 3301,
  invoiceMonitor: 3302,
  invoiceAllocation: 3303,
  posting: 3304,
  approvals: 3305,
  collectionsManagement: 3400,
  accountingDocumentFiles: 3401,
  lineItems: 3402,
  engagementOutbound: 3402,
  statusImport: 3403,
  cashManagement: 3500,
  cashflows: 3501,
  cashPositionWorksheet: 3502,
  creditLines: 3503,
  reports: 4000,
  bookmarks: 5000,
  controlPanel: 6000,
  masterdata: 6100,
  externalServiceProvider: 6101,
  customer: 6102,
  countryMasterData: 6103,
  currencyMasterData: 6104,
  masterBankMasterData: 6105,
  companyMasterData: 6106,
  accounts: 6107,
  cashflowTypeMasterData: 6108,
  externalSystem: 6109,
  listOfValues: 6120,
  fxRates: 6121,
  profile: 7000,
  settings: 8000,
  statusMessageSettings: 8101,
  connectorSettings: 8111,
  duplicateCheckSetup: 8112,
};

const Home = {
  key: 'home',
  text: 'CORE.menu.home',
  link: ROUTER_LINKS_FULL_PATH.home,
  icon: 'se-home',
  moduleId: MODULE_ID.home,
  canLandingPage: false,
  isActive: false,
};

// const Dashboard = {
//   'text': 'dashboard',
//   'link': ROUTER_LINKS_FULL_PATH.dashboard,
//   'icon': 'se-dashboard',
//   'moduleId': MODULE_ID.dashboard,
//   'canLandingPage': true
// };

/**
 * Start of Payments Sub modules
 */
const PaymentsFiles = {
  key: 'paymentFiles',
  text: 'STRAY',
  link: ROUTER_LINKS_FULL_PATH.paymentFiles,
  icon: '',
  moduleId: MODULE_ID.paymentFiles,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const PaymentsItems = {
  key: 'paymentItems',
  text: 'CORE.menu.paymentItems',
  link: ROUTER_LINKS_FULL_PATH.paymentItems,
  icon: '',
  moduleId: MODULE_ID.paymentItems,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

// const BankStatements = {
//   key: 'bankStatements',
//   text: 'CORE.menu.bankStatements',
//   link: ROUTER_LINKS_FULL_PATH.bankStatements,
//   icon: '',
//   moduleId: MODULE_ID.bankStatements,
//   subModuleLevel: SUBMODULES_LEVEL.TWO,
//   canLandingPage: true,
// };

const BankStatus = {
  key: 'bankStatus',
  text: 'CORE.menu.bankStatus',
  link: ROUTER_LINKS_FULL_PATH.bankStatus,
  icon: '',
  moduleId: MODULE_ID.bankStatus,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const InterdayStatments = {
  key: 'intradayStatements',
  text: 'CORE.menu.intradayStatements',
  link: ROUTER_LINKS_FULL_PATH.intradayStatements,
  icon: '',
  moduleId: MODULE_ID.intradayStatements,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const AccountStatements = {
  key: 'accountStatements',
  text: 'CORE.menu.accountStatements',
  link: ROUTER_LINKS_FULL_PATH.accountStatements,
  icon: '',
  moduleId: MODULE_ID.accountStatements,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};
const AccountStatementMessages = {
  key: 'accountStatementMessages',
  text: 'CORE.menu.accountStatementMessages',
  link: ROUTER_LINKS_FULL_PATH.accountStatementMessages,
  icon: '',
  moduleId: MODULE_ID.accountStatementMessages,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const StatementItems = {
  key: 'statementItems',
  text: 'CORE.menu.statementItems',
  link: ROUTER_LINKS_FULL_PATH.statementItems,
  icon: '',
  moduleId: MODULE_ID.statementItems,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const ControlCenter = {
  key: 'controlCenter',
  text: 'CORE.menu.controlCenter',
  link: ROUTER_LINKS_FULL_PATH.controlCenter,
  icon: '',
  moduleId: MODULE_ID.controlCenter,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};
const unknownAccounts = {
  key: 'unknownAccounts',
  text: 'CORE.menu.unknownAccounts',
  link: ROUTER_LINKS_FULL_PATH.unknownAccounts,
  icon: '',
  moduleId: MODULE_ID.unknownAccounts,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

/**
 * End of Payments Sub modules
 */

// Start of Worklist sub modules
const Payments = {
  key: 'payments',
  text: 'Modules',
  link: ROUTER_LINKS_FULL_PATH.payments,
  icon: '',
  moduleId: MODULE_ID.payments,
  submenu: [
    PaymentsFiles,
  ],
  subModuleLevel: SUBMODULES_LEVEL.ONE,
  canLandingPage: false,
};

const fileTracker = {
  key: 'cashAppFileTracker',
  text: 'CORE.menu.fileTracker',
  link: ROUTER_LINKS_FULL_PATH.cashAppFileTracker,
  icon: '',
  moduleId: MODULE_ID.fileTracker,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const contentTracker = {
  key: 'cashAppContentTracker',
  text: 'CORE.menu.contentTracker',
  link: ROUTER_LINKS_FULL_PATH.cashAppContentTracker,
  icon: '',
  moduleId: MODULE_ID.contentTracker,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const postProcessing = {
  key: 'cashAppPostProcessing',
  text: 'CORE.menu.postProcessing',
  link: ROUTER_LINKS_FULL_PATH.cashAppPostProcessing,
  icon: '',
  moduleId: MODULE_ID.postProcessing,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const processingReport = {
  key: 'cashAppProcessingReport',
  text: 'CORE.menu.processingReport',
  link: ROUTER_LINKS_FULL_PATH.cashAppProcessingReport,
  icon: '',
  moduleId: MODULE_ID.processingReport,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const cashAppPayments = {
  key: 'cashAppPayments',
  text: 'CORE.menu.payments',
  link: ROUTER_LINKS_FULL_PATH.cashAppPayments,
  icon: '',
  moduleId: MODULE_ID.cashAppPayments,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const openItems = {
  key: 'cashAppOpenItems',
  text: 'CORE.menu.openItems',
  link: ROUTER_LINKS_FULL_PATH.cashAppOpenItems,
  icon: '',
  moduleId: MODULE_ID.openItems,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const CashApp = {
  key: 'cashApp',
  text: 'CORE.menu.cashApp',
  link: ROUTER_LINKS_FULL_PATH.cashApp,
  icon: '',
  moduleId: MODULE_ID.cashApp,
  submenu: [
    fileTracker,
    contentTracker,
    postProcessing,
    processingReport,
    cashAppPayments,
    openItems,
  ],
  subModuleLevel: SUBMODULES_LEVEL.ONE,
  canLandingPage: false,
};

const invoiceMonitor = {
  key: 'accountPayableInvoiceMonitor',
  text: 'CORE.menu.invoiceMonitor',
  link: ROUTER_LINKS_FULL_PATH.accountPayableInvoiceMonitor,
  icon: '',
  moduleId: MODULE_ID.invoiceMonitor,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const invoiceAllocation = {
  key: 'invoiceAllocation',
  text: 'CORE.menu.invoiceAllocation',
  link: ROUTER_LINKS_FULL_PATH.accountPayableInvoiceAllocation,
  icon: '',
  moduleId: MODULE_ID.invoiceAllocation,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const posting = {
  key: 'accountPayablePosting',
  text: 'CORE.menu.posting',
  link: ROUTER_LINKS_FULL_PATH.accountPayablePosting,
  icon: '',
  moduleId: MODULE_ID.posting,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const approvals = {
  key: 'accountPayableApprovals',
  text: 'CORE.menu.approvals',
  link: ROUTER_LINKS_FULL_PATH.accountPayableApprovals,
  icon: '',
  moduleId: MODULE_ID.approvals,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const AccountsPayable = {
  key: 'accountsPayable',
  text: 'CORE.menu.accountsPayable',
  link: ROUTER_LINKS_FULL_PATH.accountPayable,
  icon: '',
  moduleId: MODULE_ID.accountsPayable,
  submenu: [invoiceMonitor, invoiceAllocation, posting, approvals],
  subModuleLevel: SUBMODULES_LEVEL.ONE,
  canLandingPage: false,
};

/**
 * Start of Cash Management sub modules
 */

const Cashflows = {
  key: 'cashflows',
  text: 'CORE.menu.cashflows',
  link: ROUTER_LINKS_FULL_PATH.cashflows,
  icon: '',
  moduleId: MODULE_ID.cashflows,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const CashPositionWorksheet = {
  key: 'cashPositionWorksheet',
  text: 'CORE.menu.cashPositionWorksheet',
  link: ROUTER_LINKS_FULL_PATH.cashPositionWorksheet,
  icon: '',
  moduleId: MODULE_ID.cashPositionWorksheet,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const CreditLines = {
  key: 'creditLines',
  text: 'CORE.menu.creditLines',
  link: ROUTER_LINKS_FULL_PATH.creditLines,
  icon: '',
  moduleId: MODULE_ID.creditLines,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

/**
 * End of Cash Management sub modules
 */

const CashManagement = {
  key: 'cashManagement',
  text: 'CORE.menu.cashManagement',
  link: ROUTER_LINKS_FULL_PATH.cashManagement,
  icon: '',
  moduleId: MODULE_ID.cashManagement,
  submenu: [Cashflows, CashPositionWorksheet, CreditLines],
  subModuleLevel: SUBMODULES_LEVEL.ONE,
  canLandingPage: false,
};
/**
 * End of Cash Management Modules
 */

/**
 * Start of Collections Management Sub modules
 */
const AccountingDocumentFiles = {
  key: 'accountingDocumentFiles',
  text: 'CORE.menu.accountingDocumentFiles',
  link: ROUTER_LINKS_FULL_PATH.accountingDocumentFiles,
  icon: '',
  moduleId: MODULE_ID.accountingDocumentFiles,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const LineItems = {
  key: 'lineItems',
  text: 'CORE.menu.lineItems',
  link: ROUTER_LINKS_FULL_PATH.lineItems,
  icon: '',
  moduleId: MODULE_ID.lineItems,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const EngagementOutbound = {
  key: 'engagementOutbound',
  text: 'CORE.menu.engagementOutbound',
  link: ROUTER_LINKS_FULL_PATH.engagementOutbound,
  icon: '',
  moduleId: MODULE_ID.engagementOutbound,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const StatusImport = {
  key: 'customerMasterData',
  text: 'CORE.menu.statusImport',
  link: ROUTER_LINKS_FULL_PATH.statusImport,
  icon: '',
  moduleId: MODULE_ID.statusImport,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};
/**
 * End of Collections Management Sub modules
 */

const CollectionsManagement = {
  key: 'collectionsManagement',
  text: 'CORE.menu.collectionsManagement',
  link: ROUTER_LINKS_FULL_PATH.collectionsManagement,
  icon: '',
  moduleId: MODULE_ID.collectionsManagement,
  submenu: [AccountingDocumentFiles, LineItems, EngagementOutbound, StatusImport],
  subModuleLevel: SUBMODULES_LEVEL.ONE,
  canLandingPage: false,
};

const Worklist = {
  key: 'worklist',
  text: 'Modules',
  link: ROUTER_LINKS_FULL_PATH.worklist,
  icon: 'se-worklist',
  moduleId: MODULE_ID.worklist,
  submenu: [
    Payments,
  ],
  isSubmenu: true,
  canLandingPage: false,
  isActive: true,
};

const Reports = {
  key: 'reports',
  text: 'CORE.menu.reports',
  // 'link': ROUTER_LINKS_FULL_PATH.reports,
  link: '/address',
  icon: 'se-reports',
  moduleId: MODULE_ID.reports,
  canLandingPage: false,
};

const Bookmarks = {
  key: 'bookmarks',
  text: 'CORE.menu.bookmarks',
  link: ROUTER_LINKS_FULL_PATH.bookmarks,
  icon: 'se-bookmark',
  moduleId: MODULE_ID.bookmarks,
  isSubmenu: true,
  canLandingPage: false,
};

export const MENU_CONFIG = [Home, Worklist, Reports, Bookmarks];

const Profile = {
  text: 'CORE.menu.profileDetails',
  link: ROUTER_LINKS_FULL_PATH.profile,
  icon: 'se-check-circle-fill',
  profilePic: 'assets/images/user.png',
  moduleId: MODULE_ID.profile,
  isSubmenu: false,
  canLandingPage: true,
};

const Logout = {
  text: 'CORE.menu.logout',
  link: ROUTER_LINKS_FULL_PATH.logout,
  icon: 'se-log-out',
  isLogout: true,
};

/**
 * Start of MasterData Sub modules
 */
const ExternalServiceProvider = {
  key: 'externalServiceProvider',
  text: 'CORE.menu.externalServiceProvider',
  link: ROUTER_LINKS_FULL_PATH.externalServiceProvider,
  icon: '',
  moduleId: MODULE_ID.externalServiceProvider,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const Customer = {
  key: 'customer',
  text: 'CORE.menu.customer',
  link: ROUTER_LINKS_FULL_PATH.customer,
  icon: '',
  moduleId: MODULE_ID.customer,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const CountryMasterData = {
  key: 'countryMasterData',
  text: 'CORE.menu.country',
  link: ROUTER_LINKS_FULL_PATH.countryMasterData,
  icon: '',
  moduleId: MODULE_ID.countryMasterData,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const CurrencyMasterData = {
  key: 'currencyMasterData',
  text: 'CORE.menu.currency',
  link: ROUTER_LINKS_FULL_PATH.currencyMasterData,
  icon: '',
  moduleId: MODULE_ID.currencyMasterData,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const AccountMasterData = {
  key: 'Accounts',
  text: 'CORE.menu.accounts',
  link: ROUTER_LINKS_FULL_PATH.accountMasterData,
  icon: '',
  moduleId: MODULE_ID.accounts,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};
const masterBankMasterData = {
  key: 'masterBankMasterData',
  text: 'CORE.menu.masterBank',
  link: ROUTER_LINKS_FULL_PATH.masterBankMasterData,
  icon: '',
  moduleId: MODULE_ID.masterBankMasterData,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const companyMasterData = {
  key: 'companyMasterData',
  text: 'CORE.menu.companies',
  link: ROUTER_LINKS_FULL_PATH.companyMasterData,
  icon: '',
  moduleId: MODULE_ID.companyMasterData,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const cashflowTypeMasterData = {
  key: 'cashflowTypeMasterData',
  text: 'CORE.menu.cashflowTypes',
  link: ROUTER_LINKS_FULL_PATH.cashflowtypeMasterData,
  icon: '',
  moduleId: MODULE_ID.cashflowTypeMasterData,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};
const ExternalSystem = {
  key: 'externalSystem',
  text: 'CORE.menu.extrenalSystem',
  link: ROUTER_LINKS_FULL_PATH.extrenalSystem,
  icon: '',
  moduleId: MODULE_ID.externalSystem,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const ListOfValues = {
  key: 'listOfValues',
  text: 'CORE.menu.listOfValues',
  link: ROUTER_LINKS_FULL_PATH.listOfValues,
  icon: '',
  moduleId: MODULE_ID.listOfValues,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const fxRates = {
  key: 'fxRates',
  text: 'CORE.menu.fxRates',
  link: ROUTER_LINKS_FULL_PATH.fxRatesMasterData,
  icon: '',
  moduleId: MODULE_ID.fxRates,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

/**
 * End of MasterData Sub modules
 */

/**
 * Start of Control Panel Sub modules
 */
const MasterData = {
  key: 'masterdata',
  text: 'CORE.menu.masterdata',
  link: ROUTER_LINKS_FULL_PATH.masterdata,
  icon: '',
  moduleId: MODULE_ID.masterdata,
  submenu: [
    CountryMasterData,
    CurrencyMasterData,
    masterBankMasterData,
    companyMasterData,
    Customer,
    ExternalServiceProvider,
    ExternalSystem,
    AccountMasterData,
    cashflowTypeMasterData,
    fxRates,
    ListOfValues,
    
  ],
  subModuleLevel: SUBMODULES_LEVEL.ONE,
  canLandingPage: false,
};

const StatusMessageSettings = {
  key: 'statusMessageSettings',
  text: 'CORE.menu.statusMessageSettings',
  icon: '',
  link: ROUTER_LINKS_FULL_PATH.statusMessageSettings,
  moduleId: MODULE_ID.statusMessageSettings,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const ConnectorSettings = {
  key: 'connectorSettings',
  text: 'CORE.menu.connectorSettings',
  link: ROUTER_LINKS_FULL_PATH.connectorSettings,
  icon: '',
  moduleId: MODULE_ID.connectorSettings,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const DuplicateCheckSetup = {
  key: 'duplicateCheckSetup',
  text: 'CORE.menu.duplicateCheckSetup',
  link: ROUTER_LINKS_FULL_PATH.duplicateCheckSetup,
  icon: '',
  moduleId: MODULE_ID.duplicateCheckSetup,
  subModuleLevel: SUBMODULES_LEVEL.TWO,
  canLandingPage: true,
};

const SettingMenu = {
  key: 'settings',
  text: 'CORE.menu.settings',
  moduleId: MODULE_ID.settings,
  subModuleLevel: SUBMODULES_LEVEL.ONE,
  submenu: [StatusMessageSettings, ConnectorSettings, DuplicateCheckSetup],
  isSubmenu: true,
  canLandingPage: false,
};

const othersMenu = {
  key: 'others',
  text: 'CORE.menu.others',
  moduleId: MODULE_ID.others,
  subModuleLevel: SUBMODULES_LEVEL.ONE,
  submenu: [unknownAccounts],
  isSubmenu: true,
  canLandingPage: false,
};
/**
 * End of Control Panel Sub modules
 */

const ControlPanel = {
  key: 'controlPanel',
  text: 'CORE.menu.controlPanel',
  icon: 'se-control-panel',
  moduleId: MODULE_ID.controlPanel,
  submenu: [],
  isSubmenu: true,
  canLandingPage: false,
};

export const BOTTOM_MENU_CONFIG = [ControlPanel, Profile, Logout];
