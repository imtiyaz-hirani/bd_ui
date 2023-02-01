import { Component, OnInit, Input } from '@angular/core';
import { WIDGETS } from '../../menu';

@Component({
  selector: 'widget-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() widgetType: WIDGETS;
  WIDGETS = WIDGETS;

  constructor() {}

  ngOnInit() {}

  searchFilter(event) {}
}
