import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { POWER_PANEL_BOTTOM_MENU } from '@app/layout/off-sidebar/menu';
import { SpeechRecognitionService } from '../services/speech-recognition.service';
import { Message } from '../model/chat.model';
import { WIDGETCONSTANTS } from '../../constants/widget-constants';
import { ChatService } from '../services/chat.service';
import { TriggerService } from '@app/core/services/trigger.service';

@Component({
  selector: 'app-chat-footer',
  templateUrl: './chat-footer.component.html',
  styleUrls: ['./chat-footer.component.scss'],
})
export class ChatFooterComponent implements OnInit {
  @Output() showBotPanel = new EventEmitter();
  isScripted: boolean;
  constructor(
    private speechRecognService: SpeechRecognitionService,
    private chatService: ChatService,
    private triggerService: TriggerService
  ) {}
  powerPanelBottomMenu = POWER_PANEL_BOTTOM_MENU;
  disableVoiceButton = false;
  serraUserMessage = '';
  ngOnInit() {
    this.chatService.isScripted.subscribe((res) => {
      this.isScripted = res;
    });
    this.triggerService.getEvent().subscribe((res) => {
      if (res.event && res.event.serraMessage) {
        const message = res.event.serraMessage;
        this.communicateMessages(message);
        this.showBotPanel.next(this.powerPanelBottomMenu.key);
      }
    });
  }

  /**
   * Shows bot component
   *
   * @param key
   */
  showBotComponent(key) {
    this.chatService.updateBotState({ show: true, param: key });
  }
  /**
   * Input{{ user message }}
   *
   * @param event
   * @param key
   */
  inputUserMessage(event, key: string) {
    if (event) {
      this.showBotPanel.next(key);
    }
  }
  /**
   * Listens when user press on record
   */
  listen() {
    this.disableVoiceButton = false;
    this.speechRecognService.record().subscribe(
      // listener
      (value) => {
        this.serraUserMessage = value;
        this.sendMessage();
      },
      // errror
      (err) => {
        console.log(err);
        if (err.error === WIDGETCONSTANTS.DIGITALASSITANT.noSpeech) {
          this.destroySpeech();
        }
      },
      // completion
      () => {
        this.disableVoiceButton = true;
        this.destroySpeech();
      }
    );
  }

  /**
   * Sends message
   */
  sendMessage(message?) {
    if (this.serraUserMessage.trim().length !== 0) {
      const userMessage = new Message(
        this.serraUserMessage,
        WIDGETCONSTANTS.DIGITALASSITANT.sentByUser
      );
      this.chatService.updateMessages(userMessage);
      this.communicateMessages(this.serraUserMessage);
      this.serraUserMessage = '';
    }
  }
  communicateMessages(message) {
    this.chatService.converse(message).subscribe((res: any) => {
      if (res) {
        this.chatService.updateSerraResponse(res);
        let serraResponse = '';
        if (
          typeof res.serra_response === WIDGETCONSTANTS.DIGITALASSITANT.object
        ) {
          if (Array.isArray(res.serra_response.concatenate_response)) {
            serraResponse = '';
          } else {
            serraResponse = res.serra_response.concatenate_response;
          }
        } else {
          serraResponse = res.serra_response;
        }
        this.chatService.convertTextoVoice(serraResponse);
        this.chatService.updateMessages(
          new Message(
            serraResponse,
            WIDGETCONSTANTS.DIGITALASSITANT.sentByChatBot
          )
        );
      }
    });
  }

  /**
   * Destroys speech
   */
  destroySpeech() {
    this.speechRecognService.destroySpeechObject();
  }
}
