import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { WIDGETS } from '../../menu';

@Component({
  selector: 'widget-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class OverviewComponent implements OnInit {
  @Input() widgetType: string;
  WIDGETS = WIDGETS;

  constructor() {}

  ngOnInit() {}

  searchFilter(event) {}
}
