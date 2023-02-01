import { Component, OnInit, Input } from '@angular/core';
import { WIDGETS } from '../../menu';

@Component({
  selector: 'widget-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent implements OnInit {
  @Input() widgetType: string;
  WIDGETS = WIDGETS;

  constructor() {}

  ngOnInit() {}

  searchFilter(event) {}
}
