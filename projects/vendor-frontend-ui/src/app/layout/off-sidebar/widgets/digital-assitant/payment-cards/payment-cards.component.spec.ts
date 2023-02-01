import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { TriggerService } from '@app/core/services/trigger.service';
import { PaymentItemsObservableService } from '@app/features/payments/services/payment-items-observable.service';
import { SyncfusionModules } from '@app/shared/syncfusion.module';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { of } from 'rxjs';
import { ChatService } from '../services/chat.service';

import { PaymentCardsComponent } from './payment-cards.component';

describe('PaymentCardsComponent', () => {
  let component: PaymentCardsComponent;
  let fixture: ComponentFixture<PaymentCardsComponent>;
  const routerStub = {
    navigate: jest.fn().mockReturnValue(true),
  };
  const triggerServiceStub = {
    clearEvent: jest.fn().mockReturnValue(of(true)),
  };
  const paymentObservableServiceStub = {
    setSelectedItem: jest.fn().mockReturnValue(of(true)),
  };
  const chatServiceStub = {
    updateAnamoly: jest.fn().mockReturnValue(of([])),
    removeAnamoly: jest.fn().mockReturnValue(of([])),
  };
  const data = [
    {
      isScripted: true,
      scriptedFlow: 'ANOMALY',
      actions: [
        {
          buttonText: 'Not an anomaly',
          httpMethod: 'PUT',
          uri:
            '/api/paymentformat/payment-item/anomalous/60093048356f430297de4114',
          onClickMessage: 'Payment Item marked as not an anomaly.',
          enable: true,
        },
        {
          buttonText: 'Remove Item',
          httpMethod: 'DELETE',
          uri: '/api/paymentformat/payment/60093048356f430297de4114',
          onClickMessage: 'Payment Item has been removed.',
          enable: false,
        },
      ],
      paymentItemAnomalyDTO: {
        paymentItemId: {
          uiLabel: 'Payment Item Id',
          value: 'MP45593',
        },
        companyName: {
          uiLabel: 'Company Name',
          value: 'Serrala India',
        },
        companyAccount: {
          uiLabel: 'Company Account',
          value: 'IN6575335474565465',
        },
        partnerName: {
          uiLabel: 'Partner Name',
          value: 'Second Insurance Holland',
        },
        partnerAccount: {
          uiLabel: 'Partner Account',
          value: 'DE21500500009876543220',
        },
        amount: {
          uiLabel: 'Amount',
          value: '1000.00',
        },
        currency: {
          uiLabel: 'Currency',
          value: 'EUR',
        },
      },
      message:
        'As per AI services, the combination of payment partner, amount and currency looks strange. This could be deviation of any of these fields.',
      paymentItem: {
        _id: '60093048356f430297de4114',
        dbtradrlineh2: null,
        dbtradrlineh1: 'Oldesloer Strasse 63',
        pmtinfidh: 'GHHMError11_SO',
        cdtrctry: 'India',
        pmtpurph: null,
        cdtrbank: null,
        ultmtcdtrnm: 'Indian Subsdiary',
        urgntpmth: 'NORM',
        dbtbank: 'First Bank of India',
        cdtrfibic: 'HDFCINAS987',
        dbtiban: 'IN6575335474565465',
        instdamt: '1000.00',
        amtccy: 'EUR',
        instrid: '1b60f8045eaa47519e04c1054cb3cc3u1q',
        dbtrctryh: 'IN',
        dbtrnmh: 'Serrala India',
        dbtribanccyh: 'EUR',
        endtoendid: 'GHHMError111_SO',
        created_by: 'Admin',
        cdtrnm: 'Second Insurance Holland',
        cdccy: '',
        internalReferenceId: 'MP45593',
        rmtinf4: null,
        rmtinf2: null,
        rmtinf3: null,
        rmtinf1: 'paying for expenses',
        btchbookgh: 'true',
        dbtrfibich: 'HDFCIN00123',
        ultmtdbtrnm: 'Serrala Transactions Account',
        cdtriban: 'DE21500500009876543220',
        purposecd: null,
        cdtradrline1: 'Saphire Building,6th floor',
        createdDate: '2021-01-21T07:42:00+0000',
        cdtradrline2: 'SV road',
        category: 'SEPA',
        status: 'Sent',
        inboundFileId: null,
        outboundFileId: 'IM4346',
        fileId: 'IM4346',
        reqdexctndth: '04/09/2020',
        iptrrefidh: 'GHHError1_SO',
        cdtrbankctryh: '',
        dbtrbankctryh: 'India',
        cdtrbankadrline1: null,
        cdtrbankadrline2: null,
        cdtrbankadrline3: null,
        dbtrbankadrlineh1: 'ICC TRADE TOWER',
        dbtrbankadrlineh2: 'SB  ROAD ',
        dbtrbankadrlineh3: 'PUNE',
        formatId: '5ea0a3cd6bb4336e6cced3d2',
        formatType: 'SEPA-CT',
        classifiedAsAnomalous: true,
        pmtmtdh: 'TRF',
        svclvlcd: 'SEPA',
        chrgbrh: 'SLEV',
        companyCountryName: 'India',
        partnerCountryName: null,
        duplicatedBy: null,
        delete: false,
        anomalous: true,
        warning: false,
      },
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentCardsComponent],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: TriggerService, useValue: triggerServiceStub },
        { provide: ChatService, useValue: chatServiceStub },
        {
          provide: PaymentItemsObservableService,
          useValue: paymentObservableServiceStub,
        },
      ],
      imports: [
        SyncfusionModules,
        TranslateTestingModule.withTranslations('en', {}),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentCardsComponent);
    component = fixture.debugElement.componentInstance;
    component.scriptedData = data;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
