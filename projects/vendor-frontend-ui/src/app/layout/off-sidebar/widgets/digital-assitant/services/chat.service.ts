import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { BaseService } from '@app/shared/services/base.service';
import { WIDGETAPICONSTANTS } from '../../constants/widget-api-constants';
@Injectable()
export class ChatService extends BaseService {
  conversationMessage = new BehaviorSubject([]);
  conversationResponse = new Subject();
  isScripted = new BehaviorSubject(false);
  showBotPanel = new BehaviorSubject<BotState>({ show: false, param: '' });
  private speechSynth: SpeechSynthesis;
  constructor() {
    super();
    this.speechSynth = window.speechSynthesis;
  }
  endPoint = WIDGETAPICONSTANTS.constants.ENDPOINTS.botService.communication;

  // Sends and receives messages via API
  converse(msg: string) {
    return this.httpClient.get(`${this.endPoint}?message=${msg}`, {
      observe: 'body',
    });
  }

  updateMessages(message) {
    this.conversationMessage.next([message]);
  }
  updateSerraResponse(response) {
    this.conversationResponse.next(response);
  }

  convertTextoVoice(text) {
    this.cancelSpeech();
    const utterance = new SpeechSynthesisUtterance();
    const voices = this.speechSynth.getVoices();
    utterance.voice = voices[5];
    utterance.text = text;
    utterance.rate = 1;
    utterance.pitch = 0;
    this.speechSynth.speak(utterance);
  }

  cancelSpeech() {
    this.speechSynth.cancel();
  }
  /**
   * Updates scripted flow
   *
   * @param flag:boolean;
   */
  updateScriptedFlow(flag) {
    this.isScripted.next(flag);
  }
  /**
   * Updates bot state
   *
   * @param state
   */
  updateBotState(state) {
    this.showBotPanel.next(state);
  }
  removeAnamoly(url) {
    return this.httpClient.delete(url);
  }
  updateAnamoly(url) {
    return this.httpClient.put(url, {});
  }
  scrollToBottom() {
    setTimeout(() => {
      const element = document.getElementById('powerPanelDetails');
      element.scrollTop = element.scrollHeight - element.clientHeight;
    });
  }
}
export interface BotState {
  show: boolean;
  param?: string;
}
