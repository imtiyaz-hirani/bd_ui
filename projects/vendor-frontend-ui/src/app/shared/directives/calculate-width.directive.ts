import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Utils } from '../utils/utils';

@Directive({
  selector: '[appCalculateWidth]',
})
export class CalculateWidthDirective implements OnChanges {
  constructor(private el: ElementRef) {}
  @Input() fieldWidth: any;
  @Input() font: any;
  @Input() fieldValue: any;
  @Input() value: any;
  resize(fieldValue) {
    const element: HTMLElement = this.el.nativeElement;
    if (element) {
      let size = 0;
      if (!fieldValue) {
        size = this.fieldWidth;
      } else {
        size = Utils.calculateWidthOfField(fieldValue.toString(), this.font);
      }
      element.style.width = size + 'px';
      element.style.transition = 'width 0.1s';
    }
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    this.resize(
      simpleChanges.fieldValue ? simpleChanges.fieldValue.currentValue : ''
    );
  }
}
