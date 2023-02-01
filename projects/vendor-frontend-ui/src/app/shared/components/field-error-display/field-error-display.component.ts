import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'field-error-display',
  encapsulation: ViewEncapsulation.None,
  template: `<div *ngIf="displayError">
    <div class="e-error">
      {{ errorMsg }}
    </div>
  </div>`,
})
export class FieldErrorDisplayComponent {
  @Input() errorMsg: string;
  @Input() displayError: boolean;
}
