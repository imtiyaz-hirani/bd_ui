import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-data-display',
  templateUrl: './field-data-display.component.html',
  styleUrls: ['./field-data-display.component.scss'],
})
export class FieldDataDisplayComponent implements OnInit {
  @Input() data: string;
  @Input() noData: string;
  constructor() {}

  ngOnInit() {}
}
