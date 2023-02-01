import { Injectable, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import SockJS from 'sockjs-client';
import { filter, first, switchMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import * as StompJS from 'stompjs';

@Injectable({
  providedIn: 'root',
})
export class SocketClientService implements OnDestroy {
  private client: StompJS.Client;
  private state: BehaviorSubject<SocketClientState>;
  private url: string;

  constructor() {
    this.state = new BehaviorSubject<SocketClientState>(
      SocketClientState.ATTEMPTING
    );
  }
  static jsonHandler(message: StompJS.Message): any {
    return JSON.parse(message.body);
  }

  static textHandler(message: StompJS.Message): string {
    return message.body;
  }

  establishConnection(url) {
    this.url = url;
    if (this.state.value === SocketClientState.ATTEMPTING) {
      this.client = StompJS.over(new SockJS(url));
      this.client.connect(
        {},
        () => {
          this.state.next(SocketClientState.CONNECTED);
        },
        (err) => {
          console.log(err, 'establishing', this);
        }
      );
    }
  }

  connect(): Observable<StompJS.Client> {
    return new Observable<StompJS.Client>((observer) => {
      this.state
        .pipe(filter((state) => state === SocketClientState.CONNECTED))
        .subscribe(
          () => {
            observer.next(this.client);
          },
          (error) => {
            const self = this;
            console.log(error, 'connection', this);
          }
        );
    });
  }

  ngOnDestroy() {
    this.connect()
      .pipe(first())
      .subscribe((inst) => inst.disconnect(null));
  }

  onMessage(
    topic: string,
    handler = SocketClientService.jsonHandler
  ): Observable<any> {
    return this.connect().pipe(
      first(),
      switchMap(
        (inst) =>
          new Observable<any>((observer) => {
            const subscription: StompJS.Subscription = inst.subscribe(
              topic,
              (message) => observer.next(handler(message))
            );
            return () => {
              inst.unsubscribe(subscription.id);
            };
          })
      )
    );
  }

  onPlainMessage(topic: string): Observable<string> {
    return this.onMessage(topic, SocketClientService.textHandler);
  }

  send(topic: string, payload: any): void {
    this.connect()
      .pipe(first())
      .subscribe((inst) => inst.send(topic, {}, JSON.stringify(payload)));
  }
}

export enum SocketClientState {
  ATTEMPTING,
  CONNECTED,
}
