import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
  Type,
  ComponentFactoryResolver,
  OnChanges,
  OnInit,
} from '@angular/core';
import { PaymentCardsComponent } from '../payment-cards/payment-cards.component';
import { ChatService } from '../services/chat.service';
import { TriggerService } from '@app/core/services/trigger.service';

@Component({
  selector: 'app-scripted-flow',
  templateUrl: './scripted-flow.component.html',
  styleUrls: ['./scripted-flow.component.scss'],
})
export class ScriptedFlowComponent implements OnInit, OnChanges {
  @Input() scriptedResponse;
  @Input() botResponse;
  constructor(
    private resolver: ComponentFactoryResolver,
    private triggerService: TriggerService,
    private chatService: ChatService
  ) {}
  currentCardIndex = 0;
  currentPaymentCard = {};
  components = [];
  currentIndexText = '';

  @ViewChild('scriptedFlowContainer', { read: ViewContainerRef })
  scriptedFlowContainer: ViewContainerRef;
  ngOnInit(): void {
    this.triggerService.getEvent().subscribe((res) => {
      if (res.event && res.event.updateScriptedFlow) {
        this.addComponent();
      }
    });
    setTimeout(() => {
      if (this.scriptedResponse.length > 0) {
        this.addComponent();
      }
    });
  }
  ngOnChanges(): void {}
  /**
   *Add new component
   *
   * @memberof ScriptedFlowComponent
   */
  addComponent(): void {
    if (this.currentCardIndex < this.scriptedResponse.length) {
      const componentFactory = this.resolver.resolveComponentFactory(
        PaymentCardsComponent
      );
      const component = this.scriptedFlowContainer.createComponent(
        componentFactory
      );
      this.components.push(component);
      this.currentPaymentCard = this.scriptedResponse[this.currentCardIndex];
      component.instance.scriptedData = this.currentPaymentCard;
      component.instance.indexText = this.convertNumbertoText(
        this.currentCardIndex
      );
      if (this.currentCardIndex === 0) {
        component.instance.userAnomolyText = this.botResponse.user_message;
      } else {
        component.instance.userAnomolyText = '';
      }
      this.currentCardIndex++;
      this.chatService.scrollToBottom();
    } else {
      this.chatService.updateScriptedFlow(false);
      this.currentPaymentCard = {};
      this.currentCardIndex = 0;
      this.components = [];
    }
  }

  /**
   * Removes component
   *
   * @param componentClass
   */
  removeComponent(componentClass: Type<unknown>): void {
    const component = this.components.find(
      (comp) => comp.instance instanceof componentClass
    );
    const componentIndex = this.components.indexOf(component);
    if (componentIndex !== -1) {
      this.scriptedFlowContainer.remove(
        this.scriptedFlowContainer.indexOf(component)
      );
      this.components.splice(componentIndex, 1);
    }
  }

  /**
   * on destroy
   */
  ngOnDestroy(): void {
    this.currentPaymentCard = {};
    this.currentCardIndex = 0;
  }
  /**
   * Converts numberto text
   * @param num
   * @returns
   */
  convertNumbertoText(num): string {
    const textArray = [
      'first',
      'second',
      'third',
      'fourth',
      'fifth',
      'sixth',
      'seventh',
      'eighth',
      'ninth',
      'tenth',
      'eleventh',
      'twelth',
      'thirteen',
      'fourteen',
      'fifteen',
    ];
    const txtArray = [
      'Here is the details for the',
      "Let's go to",
      'Check out the ',
    ];
    const randomIndex = Math.floor(Math.random() * txtArray.length);
    return `${txtArray[randomIndex]} ${textArray[num]} one:`;
  }
}
