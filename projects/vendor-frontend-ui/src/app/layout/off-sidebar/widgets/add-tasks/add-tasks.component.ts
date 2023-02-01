import { Component, OnInit, Input } from '@angular/core';
import { WIDGETS } from '../../menu';

@Component({
  selector: 'widget-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.scss'],
})
export class AddTasksComponent implements OnInit {
  @Input() widgetType: string;
  WIDGETS = WIDGETS;

  constructor() {}

  ngOnInit() {}

  searchFilter(event) {}
}
