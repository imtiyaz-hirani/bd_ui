import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule],
  providers: [],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent],
})
export class BreadcrumbModule {}
