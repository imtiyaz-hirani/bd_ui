// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ROUTER_LINKS_FULL_PATH: any = {};

/** Login Module */
ROUTER_LINKS_FULL_PATH['login'] = '/login';

ROUTER_LINKS_FULL_PATH['paymentapp'] = '';
ROUTER_LINKS_FULL_PATH['home'] = ROUTER_LINKS_FULL_PATH['paymentapp'] + '/home';

/** Dashboard Module */
ROUTER_LINKS_FULL_PATH['dashboard'] =
  ROUTER_LINKS_FULL_PATH['paymentapp'] + '/dashboard';
ROUTER_LINKS_FULL_PATH['dashboard1'] =
  ROUTER_LINKS_FULL_PATH['dashboard'] + '/dashboard1';
ROUTER_LINKS_FULL_PATH['dashboard2'] =
  ROUTER_LINKS_FULL_PATH['dashboard'] + '/dashboard2';
ROUTER_LINKS_FULL_PATH['dashboardSummary'] =
  ROUTER_LINKS_FULL_PATH['dashboard'] + '/summary';

/** Payments Module */
ROUTER_LINKS_FULL_PATH['payments'] =
  ROUTER_LINKS_FULL_PATH['paymentapp'] + '/payments';
ROUTER_LINKS_FULL_PATH['paymentsInput'] =
  ROUTER_LINKS_FULL_PATH['payments'] + '/payment-input';
ROUTER_LINKS_FULL_PATH['paymentFiles'] =
  ROUTER_LINKS_FULL_PATH['payments'] + '/payment-messages';
ROUTER_LINKS_FULL_PATH['paymentFileDetails'] =
  ROUTER_LINKS_FULL_PATH['paymentFiles'] + '/%s';
ROUTER_LINKS_FULL_PATH['paymentFileDetailsItems'] =
  ROUTER_LINKS_FULL_PATH['paymentFileDetails'] + '/payment-items';
ROUTER_LINKS_FULL_PATH['paymentFileDetailsItemsQuickPay'] =
  ROUTER_LINKS_FULL_PATH['paymentFileDetailsItems'] + '/quick-pay';
ROUTER_LINKS_FULL_PATH['paymentFileDetailsItemsManualInput'] =
  ROUTER_LINKS_FULL_PATH['paymentFileDetails'] + '/manual-input';
ROUTER_LINKS_FULL_PATH['paymentFileDetailsItemsDetails'] =
  ROUTER_LINKS_FULL_PATH['paymentFileDetailsItems'] + '/%s';

ROUTER_LINKS_FULL_PATH['paymentItems'] =
  ROUTER_LINKS_FULL_PATH['payments'] + '/payment-items';
ROUTER_LINKS_FULL_PATH['paymentItemDetails'] =
  ROUTER_LINKS_FULL_PATH['paymentItems'] + '/%s';
ROUTER_LINKS_FULL_PATH['paymentItemsQuickPay'] =
  ROUTER_LINKS_FULL_PATH['paymentItems'] + '/quick-pay';
ROUTER_LINKS_FULL_PATH['paymentItemsManualInput'] =
  ROUTER_LINKS_FULL_PATH['paymentItems'] + '/manual-input';
ROUTER_LINKS_FULL_PATH['bankStatements'] =
  ROUTER_LINKS_FULL_PATH['payments'] + '/bank-statements';
ROUTER_LINKS_FULL_PATH['bankStatus'] =
  ROUTER_LINKS_FULL_PATH['payments'] + '/bank-status';
ROUTER_LINKS_FULL_PATH['bankStatusDetails'] =
  ROUTER_LINKS_FULL_PATH['bankStatus'] + '/%s';
ROUTER_LINKS_FULL_PATH['intradayStatements'] =
  ROUTER_LINKS_FULL_PATH['payments'] + '/intraday-statements';
ROUTER_LINKS_FULL_PATH['paymentOthers'] =
  ROUTER_LINKS_FULL_PATH['payments'] + '/others';

ROUTER_LINKS_FULL_PATH['cashManagement'] = 'cash-management';
ROUTER_LINKS_FULL_PATH['cashflows'] =
  ROUTER_LINKS_FULL_PATH['cashManagement'] + '/cashflows';
ROUTER_LINKS_FULL_PATH['cashPositionWorksheet'] =
  ROUTER_LINKS_FULL_PATH['cashManagement'] + '/cash-position-worksheet';
ROUTER_LINKS_FULL_PATH['creditLines'] =
  ROUTER_LINKS_FULL_PATH['cashManagement'] + '/credit-lines';

ROUTER_LINKS_FULL_PATH['cashApp'] = 'cash-app';
ROUTER_LINKS_FULL_PATH['cashAppFileTracker'] =
  ROUTER_LINKS_FULL_PATH['cashApp'] + '/file-tracker';
ROUTER_LINKS_FULL_PATH['cashAppContentTracker'] =
  ROUTER_LINKS_FULL_PATH['cashApp'] + '/content-tracker';
ROUTER_LINKS_FULL_PATH['cashAppPostProcessing'] =
  ROUTER_LINKS_FULL_PATH['cashApp'] + '/post-processing';
ROUTER_LINKS_FULL_PATH['cashAppProcessingReport'] =
  ROUTER_LINKS_FULL_PATH['cashApp'] + '/processing-report';
ROUTER_LINKS_FULL_PATH['cashAppPayments'] =
  ROUTER_LINKS_FULL_PATH['cashApp'] + '/payments';
ROUTER_LINKS_FULL_PATH['cashAppOpenItems'] =
  ROUTER_LINKS_FULL_PATH['cashApp'] + '/open-items';

ROUTER_LINKS_FULL_PATH['accountsPayable'] = 'accounts-payable';
ROUTER_LINKS_FULL_PATH['accountPayableInvoiceMonitor'] =
  ROUTER_LINKS_FULL_PATH['cashApp'] + '/invoice-monitor';
ROUTER_LINKS_FULL_PATH['accountPayableInvoiceAllocation'] =
  ROUTER_LINKS_FULL_PATH['cashApp'] + '/invoice-allocation';
ROUTER_LINKS_FULL_PATH['accountPayablePosting'] =
  ROUTER_LINKS_FULL_PATH['cashApp'] + '/payable-posting';
ROUTER_LINKS_FULL_PATH['accountPayableApprovals'] =
  ROUTER_LINKS_FULL_PATH['cashApp'] + '/approvals';

ROUTER_LINKS_FULL_PATH['accounts'] =
  ROUTER_LINKS_FULL_PATH['paymentapp'] + '/accounts';
ROUTER_LINKS_FULL_PATH['accountStatementMessages'] =
  ROUTER_LINKS_FULL_PATH['accounts'] + '/account-statment-messages';
ROUTER_LINKS_FULL_PATH['accountStatementMessagesDetails'] =
  ROUTER_LINKS_FULL_PATH['accountStatementMessages'] + '/%s';
ROUTER_LINKS_FULL_PATH['accountStatementMessageStatements'] =
  ROUTER_LINKS_FULL_PATH['accountStatementMessagesDetails'] +
  '/account-statements';
ROUTER_LINKS_FULL_PATH['accountStatementMessagesItemDetails'] =
  ROUTER_LINKS_FULL_PATH['accountStatementMessageStatements'] + '/%s';
ROUTER_LINKS_FULL_PATH['accountStatementMessageStatementItems'] =
  ROUTER_LINKS_FULL_PATH['accountStatementMessagesItemDetails'] +
  '/statement-items';

ROUTER_LINKS_FULL_PATH['accountStatements'] =
  ROUTER_LINKS_FULL_PATH['accounts'] + '/account-statements';
ROUTER_LINKS_FULL_PATH['accountStatementItemDetails'] =
  ROUTER_LINKS_FULL_PATH['accountStatements'] + '/%s';
ROUTER_LINKS_FULL_PATH['accountStatementItems'] =
  ROUTER_LINKS_FULL_PATH['accountStatementItemDetails'] + '/statement-items';

ROUTER_LINKS_FULL_PATH['statementItems'] =
  ROUTER_LINKS_FULL_PATH['accounts'] + '/statement-items';
ROUTER_LINKS_FULL_PATH['controlCenter'] =
  ROUTER_LINKS_FULL_PATH['accounts'] + '/control-center';

/** MasterData Module */
ROUTER_LINKS_FULL_PATH['masterdata'] =
  ROUTER_LINKS_FULL_PATH['paymentapp'] + '/masterdata';
ROUTER_LINKS_FULL_PATH['externalServiceProvider'] =
  ROUTER_LINKS_FULL_PATH['masterdata'] + '/collection-agency';
ROUTER_LINKS_FULL_PATH['addExternalServiceProvider'] =
  ROUTER_LINKS_FULL_PATH['externalServiceProvider'] + '/add';
ROUTER_LINKS_FULL_PATH['editExternalServiceProvider'] =
  ROUTER_LINKS_FULL_PATH['externalServiceProvider'] + '/edit';
ROUTER_LINKS_FULL_PATH['externalServiceProviderName'] =
  ROUTER_LINKS_FULL_PATH['externalServiceProvider'] + '/%s';
ROUTER_LINKS_FULL_PATH['externalServiceProviderDetails'] =
  ROUTER_LINKS_FULL_PATH['externalServiceProviderName'] + '/overview';

ROUTER_LINKS_FULL_PATH['customer'] =
  ROUTER_LINKS_FULL_PATH['masterdata'] + '/customer';
ROUTER_LINKS_FULL_PATH['customerManageMasterData'] =
  ROUTER_LINKS_FULL_PATH['customer'] + '/manage';
ROUTER_LINKS_FULL_PATH['customerUpdateMasterData'] =
  ROUTER_LINKS_FULL_PATH['customerManageMasterData'] + '/%s';
ROUTER_LINKS_FULL_PATH['customerDetailsMasterData'] =
  ROUTER_LINKS_FULL_PATH['customerUpdateMasterData'] + '/overview';

ROUTER_LINKS_FULL_PATH['extrenalSystem'] =
  ROUTER_LINKS_FULL_PATH['masterdata'] + '/externalSystem';

ROUTER_LINKS_FULL_PATH['countryMasterData'] =
  ROUTER_LINKS_FULL_PATH['masterdata'] + '/country';
ROUTER_LINKS_FULL_PATH['currencyMasterData'] =
  ROUTER_LINKS_FULL_PATH['masterdata'] + '/currency';
ROUTER_LINKS_FULL_PATH['accountMasterData'] =
  ROUTER_LINKS_FULL_PATH['masterdata'] + '/account';
ROUTER_LINKS_FULL_PATH['accountManageMasterData'] =
  ROUTER_LINKS_FULL_PATH['accountMasterData'] + '/manage';
ROUTER_LINKS_FULL_PATH['accountUpdateMasterData'] =
  ROUTER_LINKS_FULL_PATH['accountManageMasterData'] + '/%s';
ROUTER_LINKS_FULL_PATH['accountDetailsMasterData'] =
  ROUTER_LINKS_FULL_PATH['accountUpdateMasterData'] + '/overview';
ROUTER_LINKS_FULL_PATH['cashflowtypeMasterData'] =
  ROUTER_LINKS_FULL_PATH['masterdata'] + '/cashflow-type';
ROUTER_LINKS_FULL_PATH['listOfValues'] =
  ROUTER_LINKS_FULL_PATH['masterdata'] + '/list-of-values';
ROUTER_LINKS_FULL_PATH['fxRatesMasterData'] =
  ROUTER_LINKS_FULL_PATH['masterdata'] + '/fx-rates';
ROUTER_LINKS_FULL_PATH['fxRatesManageMasterData'] =
  ROUTER_LINKS_FULL_PATH['fxRatesMasterData'] + '/manage';
ROUTER_LINKS_FULL_PATH['fxRatesUpdateMasterData'] =
  ROUTER_LINKS_FULL_PATH['fxRatesManageMasterData'] + '/edit';
ROUTER_LINKS_FULL_PATH['fxRatesDetailsMasterData'] =
  ROUTER_LINKS_FULL_PATH['fxRatesManageMasterData'] + '/overview';
ROUTER_LINKS_FULL_PATH['masterBankMasterData'] =
  ROUTER_LINKS_FULL_PATH['masterdata'] + '/master-bank';
ROUTER_LINKS_FULL_PATH['masterBankManageMasterData'] =
  ROUTER_LINKS_FULL_PATH['masterBankMasterData'] + '/manage';
ROUTER_LINKS_FULL_PATH['masterBankUpdateMasterData'] =
  ROUTER_LINKS_FULL_PATH['masterBankManageMasterData'] + '/%s';
ROUTER_LINKS_FULL_PATH['masterBankDetailsMasterData'] =
  ROUTER_LINKS_FULL_PATH['masterBankUpdateMasterData'] + '/overview';

ROUTER_LINKS_FULL_PATH['companyMasterData'] =
  ROUTER_LINKS_FULL_PATH['masterdata'] + '/company';
ROUTER_LINKS_FULL_PATH['companyManageMasterData'] =
  ROUTER_LINKS_FULL_PATH['companyMasterData'] + '/manage';
ROUTER_LINKS_FULL_PATH['companyUpdateMasterData'] =
  ROUTER_LINKS_FULL_PATH['companyManageMasterData'] + '/%s';
ROUTER_LINKS_FULL_PATH['companyDetailsMasterData'] =
  ROUTER_LINKS_FULL_PATH['companyUpdateMasterData'] + '/overview';

ROUTER_LINKS_FULL_PATH['collectionsApp'] = 'collections';
ROUTER_LINKS_FULL_PATH['lineItems'] =
  ROUTER_LINKS_FULL_PATH['collectionsApp'] + '/line-items';
ROUTER_LINKS_FULL_PATH['engagementOutbound'] =
  ROUTER_LINKS_FULL_PATH['collectionsApp'] + '/engagement-outbound';
ROUTER_LINKS_FULL_PATH['statusImport'] =
  ROUTER_LINKS_FULL_PATH['collectionsApp'] + '/statusImport';

/**Setting Module */
ROUTER_LINKS_FULL_PATH['settings'] =
  ROUTER_LINKS_FULL_PATH['paymentapp'] + '/settings';
ROUTER_LINKS_FULL_PATH['statusMessageSettings'] =
  ROUTER_LINKS_FULL_PATH['settings'] + '/status-message-settings';
ROUTER_LINKS_FULL_PATH['manageStatusMessageSettings'] =
  ROUTER_LINKS_FULL_PATH['statusMessageSettings'] + '/manage';
ROUTER_LINKS_FULL_PATH['connectorSettings'] =
  ROUTER_LINKS_FULL_PATH['settings'] + '/connector-settings';
ROUTER_LINKS_FULL_PATH['connectorSettingsManage'] =
  ROUTER_LINKS_FULL_PATH['connectorSettings'] + '/manage';
ROUTER_LINKS_FULL_PATH['connectorSettingsUpdate'] =
  ROUTER_LINKS_FULL_PATH['connectorSettingsManage'] + '/%s';
ROUTER_LINKS_FULL_PATH['connectorSettingsDetails'] =
  ROUTER_LINKS_FULL_PATH['connectorSettingsUpdate'] + '/overview';

ROUTER_LINKS_FULL_PATH['duplicateCheckSetup'] =
  ROUTER_LINKS_FULL_PATH['settings'] + '/duplicate-check-setup';

/** collection Module */
ROUTER_LINKS_FULL_PATH['collectionsManagement'] =
  ROUTER_LINKS_FULL_PATH['paymentapp'] + '/collections';
ROUTER_LINKS_FULL_PATH['accountingDocumentFiles'] =
  ROUTER_LINKS_FULL_PATH['collectionsManagement'] + '/accounting-document-file';

ROUTER_LINKS_FULL_PATH['others'] =
  ROUTER_LINKS_FULL_PATH['paymentapp'] + '/others';
ROUTER_LINKS_FULL_PATH['unknownAccounts'] =
  ROUTER_LINKS_FULL_PATH['others'] + '/unknown-accounts';
