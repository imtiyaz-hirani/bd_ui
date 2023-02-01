import { DeleteEventArgs } from '@syncfusion/ej2-angular-buttons';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'vendor-supplier-list-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input()
  chips: string[];

  @Output()
  showFiterValue=new EventEmitter<boolean>();

  value:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  showFilter() : void{
    this.value=!this.value;
    this.showFiterValue.emit(this.value);
  }

  onDelete(event: DeleteEventArgs): void {
    //this.bankStatuService.deleteChip(event.text);
  }
}
