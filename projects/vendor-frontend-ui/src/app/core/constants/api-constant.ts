// Define application constants
export class ApiConstant {
  static constants = {
    API_ENDPOINTS: {
      masterdata: {
        currencies: '/backend/masterdata/api/masterdata/currencies',
        countries: '/backend/masterdata/api/masterdata/countries',
        companies: '/backend/masterdata/api/masterdata/companies',
        accounts: '/backend/masterdata/api/masterdata/accounts',
        accountsByType:
          '/backend/masterdata/api/masterdata/accounts/accountByType',
        banks: '/backend/masterdata/api/masterdata/banks',
        masterbanks: '/backend/masterdata/api/masterdata/masterbanks',
        validateBic: '/backend/masterdata/api/masterdata/masterbanks/validate',
        getBankCodes: '/backend/masterdata/api/masterdata/banks/bankcodes',
        status: '/backend/masterdata/api/masterdata/states',
        partner: '/backend/masterdata/api/masterdata/partners/partners-wrapper',
        getExistingParty: '/backend/masterdata/api/masterdata/partners/party',
        deletePartner: '/backend/masterdata/api/masterdata/partners',
        deletePartnerAccount: `/backend/masterdata/api/masterdata/partners/partnerid/partner-account`,
        partyLookup: `/backend/masterdata/api/masterdata/partners/party-lookup`,
        partyLookByCurrencyCode:
          '/backend/masterdata/api/masterdata/partners/partner-accounts-by-currencycode',
        accountLookByCurrencyCode:
          '/backend/masterdata/api/masterdata/accounts/accounts-by-currencycode',
        stausInfoCategory:
          '/backend/masterdata/api/masterdata/status-infocategory',
        statusCode: '/backend/masterdata/api/masterdata/status-code',
        reasonCode: '/backend/masterdata/api/masterdata/reason-code',
        externalServiceProvider:
          '/backend/masterdata/api/masterdata/collectionagency',
        customers: '/backend/masterdata/api/masterdata/customers',
        lov: '/backend/masterdata/api/masterdata/listofvalues/value',
        cashflowtype: '/backend/masterdata/api/masterdata/cashflowtype',
        parties: '/backend/masterdata/api/masterdata/parties',
        unknownAccounts: '/backend/masterdata/api/masterdata/missingmasterdata',
        fxRates:
          '/backend/masterdata/api/masterdata/currencyconversion/rateTypes',
        fxRatesDetails: '/backend/masterdata/api/masterdata/currencyconversion',
        masterdataLov: '/backend/masterdata/api/masterdata/listofvalues/value',
        fxRatesImport:
          '/backend/masterdata/api/masterdata/currencyconversion/upload',
        fxRatesEffectiveDates:
          '/backend/masterdata/api/masterdata/currencyconversion/effectiveDates',
        fxRatesImportCheckDuplicate:
          '/backend/masterdata/api/masterdata/currencyconversion/upload/duplicate',
      },

      adchcollection: {
        allProductsLov: '/backend/masterdata/api/masterdata/listofvalues',
        collectionServiceLov:
          '/backend/adchcollection/api/creditcollection/listofvalues',
        fileImport:
          '/backend/adchcollection/api/creditcollection/listofvalues/fileimport',
        externalSystem: '/backend/adchcollection/api/creditcollection/external-system',
        collectionsLov: '/backend/adchcollection/api/creditcollection/listofvalues/value',
      },

      dashboard: {
        getAllWidget: `/backend/paymentinput/api/paymentformat/dashboard`,
      },
      paymentInput: {
        submitPaymentInput: `/backend/paymentinput/api/paymentservice`,
        getPaymentFormatDefination: `/backend/paymentinput/api/paymentformat/definition/`,
        getTemplateList: `/backend/paymentinput/api/paymentformat/template/format/`,
        templateCRUDAPI: '/backend/paymentinput/api/paymentformat/template/',
        editPaymentInput: `/backend/paymentinput/api/paymentformat/payment/`,
        getPaymentFiles: `/backend/paymentinput/api/paymentformat/payment/file/search`,
        getPaymentItems: `/backend/paymentinput/api/paymentformat/payment/items/search`,
        changeBulkStatus: `/backend/paymentinput/api/paymentformat/payment/file/file-status`,
      },
      settings: {
        getAdaptor:
          '/backend/settings/api/communication-channel/setting/adapters',
        getProtocol:
          '/backend/settings/api/communication-channel/setting/protocols',
        channelSetting: '/backend/settings/api/communication-channel',
        testConnectionSwift:
          '/backend/settings/api/communication-channel/test-connection',
        testConnectionERP:
          '/backend/settings/api/communication-channel/test-sftp-connection',
        encodingTypes:
          '/backend/settings/api/communication-channel/encoding-types',
        outboundConnector:
          '/backend/settings/api/communication-channel/outbound-connectors',
        approvePaymentFile: '/backend/settings/api/communication-channel/send',
        updateResource:
          '/backend/settings/api/communication-channel/update-resource',
        deleteResource:
          '/backend/settings/api/communication-channel/delete-resource',
        receiveFile: '/backend/settings/api/communication-channel/receive',
        sendFile: `/backend/settings/api/communication-channel/send`,
        statusChange: `/backend/paymentinput/api/paymentformat/payment/file/status`,
      },
      quickPay: {
        getPaymentHistory:
          '/backend/paymentinput/api/paymentformat/payment/history',
      },
      paymentOverview: {
        getPaymentFile:
          '/backend/paymentinput/api/paymentformat/payment/overview/',
        getPaymentItems: `/backend/paymentinput/api/paymentformat/payment/payment-item-overview`,
        fileImport: `/backend/paymentinput/api/paymentformat/payment/fileimport`,
        storeFrontEndSetting: `/backend/paymentinput/api/paymentformat/store-frontend-setting/`,
        updateFileStatus: `/backend/paymentinput/api/paymentformat/payment/file/status`,
        deletePaymentFile: `/backend/paymentinput/api/paymentformat/payment/file/`,
        updatePaymentItemStatus: `/backend/paymentinput/api/paymentformat/payment/`,
        deletePaymentItem: `/backend/paymentinput/api/paymentformat/payment/`,
        getPaymentFormatLov: `/backend/paymentinput/api/paymentformat/listofvalues/value`,
        generatePayment: `/backend/paymentinput/api/paymentformat/payment/generate-payments`,
        paymentMessageWidgets: `/backend/paymentinput/api/paymentformat/payment-message/`,
        paymentWidgetFilter: `/backend/paymentinput/api/paymentformat/filter`,
        paymentItemLifecycle: `/backend/paymentinput/api/paymentformat/lifecycle-logs/payment-item`,
        paymentMessageLifecycle: `/backend/paymentinput/api/paymentformat/lifecycle-logs`,
        paymentMessageDummyLifecycle: `/backend/paymentinput/api/paymentformat/lifecycle-logs/payment-message`,
        changeExecutionDate: `/backend/paymentinput/api/paymentformat/payment/file/execution-date`,
        changePaymentExecutionDate: `/backend/paymentinput/api/paymentformat/payment/item/execution-date`,
        paymentMessageRegeneratePayment: `/backend/paymentinput/api/paymentformat/payment/file/regenerate-payment`,
        deletePaymentItemsFromFile: `/backend/paymentinput/api/paymentformat/payment/file/delete-item`,
        removePaymentItemsFromFile: `/backend/paymentinput/api/paymentformat/payment/file/remove-item`,
      },
      bankstatus: {
        getLov: '/backend/bankstatus/api/bankstatus/listofvalues/value',
        statusMatchSequence:
          '/backend/bankstatus/api/bankstatus/status-matching-sequence',
        getBankStatus: '/backend/bankstatus/api/bankstatus/search',
        manualMatch: '/backend/bankstatus/api/bankstatus',
      },
      objectfactory: {
        getInfoCategory:
          '/backend/objectfactory/api/objectfactory/info-category',
        getPaymentFormats: `/backend/objectfactory/api/objectfactory/info-category/format/`,
        getObjectType: '/backend/objectfactory/api/objectfactory/objecttype',
      },
      botService: {
        communication: '/backend/digitalassistant/bot_service',
      },
      notifications: {
        notificationURL:
          '/backend/notifications/api/notification-service/notification',
        getAllNotifications: '/backend/notifications/api/notification-service',
        getServerNotifications: '/topic/group',
      },
      insights: {
        getAllInsights: '/backend/insights/api/insight/',
        updateInsightsPrefix: '/backend/insights',
      },
      accountStatementService: {
        getStatementMessage:
          '/backend/accountStatementService/api/account-statement/messages',
        getAccountStatement:
          '/backend/accountStatementService/api/account-statement/statements',
        fileDownload:
          '/backend/accountStatementService/api/account-statement/files',
        deleteStatment:
          '/backend/accountStatementService/api/account-statement/validation/unknown',
        ignoreAlways:
          '/backend/accountStatementService/api/account-statement/validation/unknown/ignoreAlways',
        ignoreUnregisteredStatement:
          '/backend/accountStatementService/api/account-statement/validation/unregistered/ignore',
        addUnregisteredStatementToRegistered:
          '/backend/accountStatementService/api/account-statement/validation/unregistered/addtoregistered',
        getItems:
          '/backend/accountStatementService/api/account-statement/items',
        getAccounts:
          '/backend/accountStatementService/api/account-statement/accounts',
        ignoreBalanceCheck:
          '/backend/accountStatementService/api/account-statement/validation/balancecheck/ignore',
        ignoreItemTally:
          '/backend/accountStatementService/api/account-statement/validation/itemtally/ignore',
        addToAccount:
          '/backend/accountStatementService/api/account-statement/statements/validate',
        getStatementItems:
          '/backend/accountStatementService/api/account-statement/items',
      },
      accountingDocumentService: {
        importFile:
          '/backend/accountingDocumentService/api/accountingdocument/fileimport',
        accountingDocumentFilesList:
          '/backend/accountingDocumentService/api/accountingdocument/filemetadata',
      },
    },
  };
  //url's which doesn't require TENAT ID //
  static withoutTenantIdUrls = [
    ApiConstant.constants.API_ENDPOINTS.settings.getAdaptor,
    ApiConstant.constants.API_ENDPOINTS.settings.encodingTypes,
    ApiConstant.constants.API_ENDPOINTS.settings.getProtocol,
    ApiConstant.constants.API_ENDPOINTS.botService.communication,
  ];
}
