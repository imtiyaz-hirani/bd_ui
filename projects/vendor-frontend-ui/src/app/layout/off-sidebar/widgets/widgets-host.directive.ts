import { Directive, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[widgetsHost]' })
export class WidgetsHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
