import { RuleModel } from '@syncfusion/ej2-angular-querybuilder';
import { SelectingEventArgs, TabComponent } from '@syncfusion/ej2-angular-navigations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { StrayService } from './service/stray-service';
import { StrayQuery } from './model/model';


 @Component({
  selector: 'app-supplier-invitation-list',
  templateUrl: './supplier-invitation-list.component.html',
  styleUrls: ['./supplier-invitation-list.component.scss']
})
export class SupplierInvitationListComponent implements OnInit {

  @ViewChild('element') tabObj: TabComponent;
  chips: string[] =['chip1' , 'chip2'];
  target = '.control-section';
  showFilter = false;
  strayData;

  public headerText: Object = [{ 'text': '<div class="e-title  ">30 Vendors</div>' },
  { 'text': '<div class="e-title  ">Invitation Monitoring</div>' },
  { 'text': '<div class="e-title e-active">Invite</div>' }];


  importRules: RuleModel;

  constructor( private translateService: TranslateService, private strayService: StrayService,private router: Router) { }

  ngOnInit(): void {

    this. importRules = {
      'condition': 'and',
      'rules': [{
              'label': 'Employee ID',
              'field': 'EmployeeID',
              'type': 'number',
              'operator': 'equal',
              'value': 1
          },
          {
              'label': 'Title',
              'field': 'Title',
              'type': 'string',
              'operator': 'equal',
              'value': 'Sales Manager'
          }]
      };



      const strayQuery:StrayQuery = JSON.parse(localStorage.getItem("strayQuery"));

      if(strayQuery){
        this.onQueryChange(strayQuery)
      }


  }

  public animation: object = {
    previous: { effect: "", duration: 0, easing: "" },
    next: { effect: "", duration: 0, easing: "" }
      };

/**
   * Display global filter
   */
 displayFilter = (): void => {
   console.log('here.. line 70');
  this.target = '.toolbar';
  this.showFilter = !this.showFilter;
};

/**
   *
   * @param $event RuleModel
   * apply the filter according to rule model
   */
 onApply($event: RuleModel): void {
  //this.bankStatusService.applyFilter($event);
}

/**
 * closes the global filter
 */
hideFilter(event: string): void {
  this.showFilter = false;
}

onQueryChange(event){
   this.strayService.getStrayDate(event).subscribe(data=>{
    this.strayData = [];
      this.strayData = data;
      console.log(this.strayData);
   });
}

addRecord(): void {

    this.router.navigate(['/vendor/add-stray']);

}



}
