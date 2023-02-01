export class Constants {
  static themesArr = [{ value: 'default-theme', text: 'Brand Light theme' }];

  static defaultTheme = 'default-theme';

  static LANGUAGE_ARR = [
    { code: 'en', text: 'English' },
    { code: 'de', text: 'Deutsch' },
  ];

  static defaultLanguage = 'en';

  static states = {
    Active: 'Active',
    Inactive: 'InActive',
  };

  static CONTACT_TYPE_PRIMARY = 'PRIMARY';

  static dropDownTypes = {
    emailTypes: [
      { id: 0, val: '' },
      { id: 1, val: 'Primary' },
      { id: 2, val: 'Secondary' },
      { id: 3, val: 'Other' },
    ],
    titleTypes: [
      { id: 1, val: '' },
      { id: 2, val: 'Mr' },
      { id: 3, val: 'Ms' },
      { id: 4, val: 'Mrs' },
      { id: 5, val: 'Dr' },
    ],
    contactTypes: [
      { id: 0, val: '' },
      { id: 1, val: 'Primary' },
      { id: 2, val: 'Secondary' },
      { id: 3, val: 'Whatsapp' },
      { id: 4, val: 'Fax' },
      { id: 5, val: 'Other' },
    ],
    paymentParty: ['New', 'Party'],
    downloadOptions: ['Download and Delete', 'Download and Archive'],
    fileEncoding: [
      { id: 1, name: 'UTF-8' },
      { id: 2, name: 'ASCII' },
    ],
    fileFormats: [
      { id: 1, name: 'SEPACT' },
      { id: 2, name: 'MT101' },
      { id: 3, name: 'SDD' },
      { id: 4, name: 'Others' },
      { id: 5, name: 'Pain 002' },
      { id: 6, name: 'MT 940' },
      { id: 7, name: 'MT 942' },
      { id: 8, name: 'camt 052' },
    ],
    messageCategoryType: [
      { name: 'Delivery', value: 'Delivery' },
      { name: 'Non Delivery', value: 'Non Delivery' },
      { name: 'Transmission', value: 'Transmission' },
    ],
  };
  static validationPatterns = {
    phonePattern: /^^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/,
    emailPattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/,
    portPattern: /^[0-9]{0,8}$/,
    alphaNumericPattern: /^[a-zA-Z0-9 ]+$/,
    nameFieldPattern: /^[a-zA-Z0-9 ,._-]+$/,
    bicValidation: /^[a-zA-Z0-9]+$/,
    DNValidation: /^(?=[^,]+(,[^,]+){1,9}$)(?=.{1,100}$)((cn=(([a-z0-9\-]{2}|[%][0-9]{2})|(?![0-9]+,)[a-z0-9\-]{2,20}),)?(ou=([a-z0-9\-]{2}|(?![0-9]+,)[a-z0-9\-]{2,20}),)*)?(o=([a-z]{4})([a-z]{2})(([0-9a-z]{1})([0-9a-np-z]{1}))(|([xX]{3})|),){1}o=swift$/,
  };
  static HtmlType = {
    textbox: 'textbox',
    textarea: 'textarea',
    lookup: 'lookup',
    datetimepicker: 'datetimepicker',
    datepicker: 'datepicker',
    numberbox: 'numberbox',
    dropdown: 'dropdown',
    toggle: 'toggle',
  };
  static COMMUNICATIONSETTINGS = {
    ERP: 'ERP',
    MQ: 'MQ',
    SFTP: 'SFTP',
    SWIFT_FILE_ACT: 'SWIFT_FILE_ACT',
    identifer: 'Identifier',
    edit: 'edit',
    infoCategories: {
      PAYMENTMESSAGE: 'PAYMENTMESSAGE',
      STATUSMESSAGE: 'STATUSMESSAGE',
      ACCOUNTSTATEMENTS: 'ACCOUNTSTATEMENTS',
      INTRADAYSTATEMENTS: 'INTRADAYSTATEMENTS',
    },
  };

  static STATUS = {
    IMPORTSUCCESSFUL: 'Import Successful',
    NEW: 'New',
    EXECUTION_DATE_CHANGED: 'Execution Date Changed',
    ITEM_DELETED: 'Item Deleted',
    ITEM_REMOVED: 'Item Removed',
    APPROVED: 'Approved',
    REJECTED: 'Rejected',
    SENT: 'Sent',
  };

  static STORAGEKEYS = {
    PAYMENTMESSAGE: 'Payment Message',
    PAYMENTITEM: 'Payment Item',
    FILEPAYMENTITEM: 'File Payment Item',
    STATUSMESSAGE: 'Status Message',
    ACCOUNTSTATEMENTMESSAGE: 'Account Statement Message',
  };

  static CHATBOTMESSAGES = {
    sera: 'Serra',
    popMsg: 'Assistant Serra is ready to help.<br>Try now',
    nospeech: 'no-speech',
    introMsg: 'What can I do for you?',
    sentBy: {
      user: 'user',
      bot: 'bot',
    },
    greetings: {
      gm: 'Good Morning',
      ge: 'Good Evening',
      ga: 'Good Afternoon',
    },
    language: 'en-uk',
    Object: 'object',
  };
  static DATETYPE = {
    date: 'date',
    datetime: 'datetime',
  };

  static KEYBOARDEVENTS = {
    ArrowDown: 'ArrowDown',
    ArrowUp: 'ArrowUp',
    Enter: 'Enter',
  };

  static INFO_CATEGORIES = {
    PAYMENT_MESSAGE: 'PAYMENT_MESSAGE',
    BANK_STATUS: 'BANK_STATUS',
    ACCOUNT_STATEMENTS: 'ACCOUNT_STATEMENTS',
  };

  static MODES = {
    view: 'view',
    edit: 'edit',
  };
  static BATCH = {
    BANK: 'bank',
    NONBANK: 'nonBank',
    ERP: 'ERP',
    ADAPTERTYPE: 'adapterType=',
  };

  static LOCALES = {
    en_EN: 'en-EN',
    es_ES: 'es-ES',
  };

  static CURRENCYCODES = {
    EUR: 'EUR',
    USD: 'USD',
  };

  static PAYMENT_ITEMS_STATUS = {
    100: 'Approved',
    200: 'Rejected',
    300: 'Sent',
    400: 'New',
    500: 'Import Successful',
    600: 'Partially Accepted by My bank',
    700: 'Accepted by Counter Party',
    800: 'Accepted by My bank',
    900: 'Execution Date Changed',
    1000: 'Item Deleted',
    1100: 'Item Removed',
  };

  static PAYMENT_MESSAGES_STATUS = {
    100: 'Approved',
    200: 'Rejected',
    300: 'Sent',
    400: 'New',
    500: 'Import Successful',
    600: 'Partially Accepted by My bank',
    700: 'Accepted by Counter Party',
    800: 'Accepted by My bank',
    900: 'Transmitted',
    1000: 'Delivered',
    1100: 'Execution Date Changed',
    1200: 'Item Deleted',
    1300: 'Item Removed',
  };

  static ACTIONS = {
    DELETE: 'delete',
    BULK_DELETE: 'bulk_delete',
    EDIT: 'edit',
    VIEW: 'view',
    APPROVE: 'approve',
    REJECT: 'reject',
    SEND: 'send',
    PAYMENT_ITEMS: 'payment items',
    CHANGE_EXECUTION_DATE: 'Change Execution Date',
    REGENERATE_PAYMENT: 'Regenerate Payment',
    REMOVE: 'remove',
    GENERATE_PAYMENT: 'generate payment',
  };

  static WIDGET_STATE = {
    COLLAPSED: 'collapsed',
    EXPANDED: 'expanded',
  };

  static DOWNLOAD_ACTION_ITEMS = [
    {
      id: 'export_pdf',
      text: 'Export to PDF',
    },
    {
      id: 'export_excel',
      text: 'Export to Excel',
    },
  ];

  static SORT_DIRECTION = {
    ASCENDING: 'Ascending',
    DESCENDING: 'Descending',
  };
}

export enum EVENT_TYPES {
  powerPanelPinned = 'powerPanelPinned',
  globalNavbarPinned = 'globalNavbarPinned',
  paymentFileChanged = 'paymentFileChanged',
}

export enum FileStatus {
  APPROVE = 100,
  REJECT = 200,
  SEND = 300,
  DELETE = 400,
  CHANGE_EXECUTION_DATE = 500,
  REGENERATE_PAYMENT = 600,
  REMOVE = 700,
  EDIT = 800,
}

export enum FileStatusString {
  APPROVE = '100',
  REJECT = '200',
  SEND = '300',
  IMPORT_SUCCESFULL = '400',
  NEW = '600',
  EXECUTION_DATE_CHANGED = '900',
  ITEM_DELETED = '1000',
  ITEM_REMOVED = '1100',
  ACCEPTED_BY_MY_BANK = 'ACCP',
  ACCEPTED_BY_COUNTER_PARTY = 'ACCPCP',
  PARTIALLY_ACCEPTED_BY_COUNTER_PARTY = 'PARTCP',
  PARTIALLY_ACCEPTED_BY_MY_BANK = 'PART',
  REJECTED_BY_COUNTER_PARTY = 'RJCTCP',
  REJECTED_BY_MY_BANK = 'RJCT',
  DELIVERED_TO_MY_BANK = 'DLVRD',
  TRANSMITTED = 'TRSMT',
  GENERATION_FAILED = '700',
  ERROR_IN_IMPORT = '500',
  DUPLICATE = '800',
}

export const FileStatusCodeValue = {
  '100': 'Approved',
  '200': 'Rejected',
  '300': 'Sent',
  '400': 'Import Successful',
  '500': 'Import Failed',
  '600': 'New',
  '700': 'Generation Failed',
  '800': 'Duplicate',
  '900': 'Execution Date Changed',
  '1000': 'Item Deleted',
  '1100': 'Item Removed',
  ACCP: 'Accepted by My bank',
  ACCPCP: 'Accepted by Counter Party',
  PARTCP: 'Partially Accepted by Counterparty',
  PART: 'Partially Accepted by My bank',
  RJCTCP: 'Rejected by Counter Party',
  RJCT: 'Rejected by My bank',
  DLVRD: 'Delivered to my bank',
  TRSMT: 'Transmitted',
};

export enum FileStatusValue {
  APPROVE = 'Approved',
  REJECT = 'Rejected',
  SEND = 'Sent',
  IMPORT_SUCCESFULL = 'Import Successful',
  NEW = 'New',
  EXECUTION_DATE_CHANGED = 'Execution Date Changed',
  ITEM_REMOVED = 'Item Removed',
  ITEM_DELETED = 'Item Deleted',
  ACCEPTED_BY_MY_BANK = 'Accepted by My bank',
  PARTIALLY_ACCEPTED_BY_COUNTER_PARTY = 'Partially Accepted by Counterparty',
  PARTIALLY_ACCEPTED_BY_MY_BANK = 'Partially Accepted by My bank',
  ACCEPTED_BY_COUNTER_PARTY = 'Accepted by Counter Party',
  REJECTED_BY_MY_BANK = 'Rejected by My bank',
  REJECTED_BY_COUNTER_PARTY = 'Rejected by Counter Party',
  DELIVERED_TO_MY_BANK = 'Delivered to my bank',
  TRANSMITTED = 'Transmitted',
  GENERATION_FAILED = 'Generation Failed',
  ERROR_IN_IMPORT = 'Import Failed',
  DUPLICATE = 'Duplicate',
}

export enum FILTER_MODE {
  IMMEDIATE = 'Immediate',
}

export enum NAME_TITLES {
  MR = 'Mr',
  MRS = 'Mrs',
  MS = 'Ms',
  DR = 'Dr',
}

export const NAME_TITLES_DROPDOWN = [
  { value: 'mr', text: 'SHARED.nameTitles.mr' },
  { value: 'ms', text: 'SHARED.nameTitles.ms' },
  { value: 'mrs', text: 'SHARED.nameTitles.mrs' },
  { value: 'dr', text: 'SHARED.nameTitles.dr' },
];

export enum CONTACT_TYPE {
  PRIMARY = 'Primary',
  SECONDARY = 'Secondary',
  WHATSAPP = 'Whatsapp',
  FAX = 'Fax',
  OTHER = 'Other',
}

export const CONTACT_TYPE_DROPDOWN = [
  { value: 'Primary', text: 'SHARED.contactTypes.primary' },
  { value: 'Secondary', text: 'SHARED.contactTypes.secondary' },
  { value: 'Whatsapp', text: 'SHARED.contactTypes.whatsapp' },
  { value: 'Fax', text: 'SHARED.contactTypes.fax' },
  { value: 'Other', text: 'SHARED.contactTypes.other' },
];

export enum EMAIL_TYPE {
  PRIMARY = 'Primary',
  SECONDARY = 'Secondary',
}

export const EMAIL_TYPE_DROPDOWN = [
  { value: 'Primary', text: 'SHARED.emailTypes.primary' },
  { value: 'Secondary', text: 'SHARED.emailTypes.secondary' },
];

export enum AccountNumberCodeType {
  IBAN = 'IBAN',
  ACCOUNT_NUMBER = 'ACCOUNT_NUMBER',
  ALTERNATE_ACCOUNT_NUMBER = 'ALTERNATE_ACCOUNT_NUMBER',
}

export enum ChartOrientation {
  Horizontal = 'Horizontal',
  Vertical = 'Vertical',
}

export enum AnomalyCells {
  PartnerName = 'cdtrnm',
  Currency = 'amtccy',
  Amount = 'instdamt',
}

export const enum ProductType {
  ALL_PRODUCTS = 'All Products',
  CASH_MANAGEMENT = 'Cash Management',
  COLLECTION_MANAGEMENT = 'Collections Management',
}

export const enum APPLICATION {
  MASTERDATA = 'masterdata',
  COLLECTION = 'Collections',
}

export const DATE_FORMAT = 'dd/MM/yyyy';

export enum HTTP_RESPONSE_CODES {
  SUCCESS = 200,
  SUCCESS_ADD_PARTIALLY = 207,
}
