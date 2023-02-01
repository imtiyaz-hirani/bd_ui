import { Component, OnInit, Input } from '@angular/core';
import { TriggerService } from '@app/core/services/trigger.service';
import { ChatService } from '../services/chat.service';
import { KeyValue } from '@angular/common';
import { ROUTER_LINKS_FULL_PATH } from '@app/core/constants';
import { Router } from '@angular/router';
// import { PaymentItemsObservableService } from '@app/features/payments/services/payment-items-observable.service';

@Component({
  selector: 'app-payment-cards',
  templateUrl: './payment-cards.component.html',
  styleUrls: ['./payment-cards.component.scss'],
})
export class PaymentCardsComponent implements OnInit {
  @Input() scriptedData: any;
  @Input() indexText?: any;
  @Input() userAnomolyText?: any;
  dataObjKeys = Object.keys;
  userSelection = '';
  actionResponse = '';
  hasActionTaken = false;
  constructor(
    private triggerService: TriggerService,
    private chatService: ChatService,
    private router: Router,
    // // private paymentItemsObservableService: PaymentItemsObservableService
  ) {}

  ngOnInit() {
    this.triggerService.clearEvent();
  }
  // Order by descending property key
  keyDescOrder = (
    a: KeyValue<number, string>,
    b: KeyValue<number, string>
  ): number => (a.key > b.key ? -1 : b.key > a.key ? 1 : 0);
  trigger(action) {
    const prefixUrl = '/backend/paymentinput';
    this.userSelection = action.buttonText;
    this.hasActionTaken = true;
    if (action.httpMethod === 'PUT') {
      const url = prefixUrl + action.uri;
      this.chatService.updateAnamoly(url).subscribe((res) => {
        if (res) {
          this.actionResponse = action.onClickMessage;
          this.triggerService.setEvent({ updateScriptedFlow: true });
        }
      });
    } else {
      const url = prefixUrl + action.uri;
      this.chatService.removeAnamoly(url).subscribe((res) => {
        if (res) {
          this.actionResponse = action.onClickMessage;
          this.triggerService.setEvent({ updateScriptedFlow: true });
        }
      });
    }
    this.chatService.scrollToBottom();
  }
  viewItemDetails() {
    console.log(this.scriptedData);
  }
  navigateToItemPage(currfile) {
    const data = {
      selectedItem: currfile.paymentItem,
      hasNext: false,
      hasPrevious: false,
    };
    // this.paymentItemsObservableService.setSelectedItem(data);
    this.router.navigate([ROUTER_LINKS_FULL_PATH.paymentItemDetails]);
  }
}
