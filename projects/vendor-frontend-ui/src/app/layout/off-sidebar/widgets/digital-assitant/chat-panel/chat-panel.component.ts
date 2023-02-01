import {
  Component,
  OnChanges,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { WIDGETCONSTANTS } from '../../constants/widget-constants';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat-panel',
  templateUrl: './chat-panel.component.html',
  styleUrls: ['./chat-panel.component.scss'],
})
export class ChatPanelComponent implements OnChanges {
  @Input() messages?;
  @Input() botResponse;
  sentbyBot = WIDGETCONSTANTS.DIGITALASSITANT.sentByChatBot;
  sentbyUser = WIDGETCONSTANTS.DIGITALASSITANT.sentByUser;
  scriptedIntent = '';
  scriptedResponse = [];
  constructor(private chatService: ChatService) {}
  ngOnChanges() {
    if (this.botResponse) {
      this.updateConversation(this.botResponse);
    }
    this.chatService.scrollToBottom();
  }

  updateConversation(response) {
    this.scriptedResponse = [];
    this.chatService.updateScriptedFlow(false);
    if (
      response &&
      response.serra_response &&
      response.serra_response.is_scripted
    ) {
      if (Array.isArray(response.serra_response.concatenate_response)) {
        this.chatService.updateScriptedFlow(true);
        this.scriptedResponse = response.serra_response.concatenate_response;
      }
    }
  }
  isScriptedFlow() {
    return this.botResponse &&
      this.botResponse.serra_response &&
      this.botResponse.serra_response.is_scripted
      ? true
      : false;
  }
}
