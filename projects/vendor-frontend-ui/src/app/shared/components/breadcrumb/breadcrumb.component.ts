import { Component, Input, OnInit } from '@angular/core';
import { BreadcrumbData } from './breadcrumb.data';

@Component({
  selector: 'app-serrala-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  constructor(public breadcrumbData: BreadcrumbData) {}

  ngOnInit() {}
}
