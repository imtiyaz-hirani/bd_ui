import { Component, OnInit, Input } from '@angular/core';
import { WIDGETS } from '../../menu';

@Component({
  selector: 'widget-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.scss'],
})
export class MyTasksComponent implements OnInit {
  @Input() widgetType: string;
  WIDGETS = WIDGETS;

  constructor() {}

  ngOnInit() {}

  searchFilter(event) {}
}
