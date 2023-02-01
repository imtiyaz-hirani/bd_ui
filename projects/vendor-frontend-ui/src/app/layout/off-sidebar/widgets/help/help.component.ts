import { Component, OnInit, Input } from '@angular/core';
import { WIDGETS } from '../../menu';

@Component({
  selector: 'widget-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})
export class HelpComponent implements OnInit {
  @Input() widgetType: string;
  WIDGETS = WIDGETS;

  constructor() {}

  ngOnInit() {}
}
