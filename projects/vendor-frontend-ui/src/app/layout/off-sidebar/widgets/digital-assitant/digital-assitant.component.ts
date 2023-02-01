import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from './services/chat.service';
import { Message } from './model/chat.model';
import { scan } from 'rxjs/operators';
import { WIDGETS } from '../../menu';
import { WIDGETCONSTANTS } from '../constants/widget-constants';

@Component({
  selector: 'app-digital-assitant',
  templateUrl: './digital-assitant.component.html',
  styleUrls: ['./digital-assitant.component.scss'],
})
export class DigitalAssitantComponent implements OnInit, OnDestroy {
  @Input() widgetType: string;
  WIDGETS = WIDGETS;
  messages: Observable<Message[]>;
  constructor(public chatService: ChatService) {}
  botResponse: Observable<{}>;
  ngOnInit() {
    if (this.messages) {
      this.chatService.conversationMessage.unsubscribe();
    }
    this.messages = this.chatService.conversationMessage
      .asObservable()
      .pipe(scan((acc, val) => acc.concat(val)));
    this.chatService.conversationResponse.subscribe((res: any) => {
      this.botResponse = res;
    });
  }
  searchFilter(event) {}
  ngOnDestroy() {
    this.chatService.cancelSpeech();
    this.chatService.updateMessages(
      new Message('', WIDGETCONSTANTS.DIGITALASSITANT.sentByUser)
    );
  }
}
