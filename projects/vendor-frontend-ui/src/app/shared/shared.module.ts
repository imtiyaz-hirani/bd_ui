import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from './services/shared.service';
import { TranslateModule } from '@ngx-translate/core';
import { FieldErrorDisplayComponent } from '@app/shared/components/field-error-display/field-error-display.component';
import { ToastMessageComponent } from '@app/shared/components/toast-message/toast-message.component';
import { SyncfusionModules } from '@app/shared/syncfusion.module';
import { SortFieldBySequencePipe } from './pipes/sort-field-by-sequence.pipe';
import { ToNumberPipe } from './pipes/to-number.pipe';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { BulkActionModalComponent } from './components/bulk-action-modal/bulk-action-modal.component';
import { FieldDataDisplayComponent } from './components/field-data-display/field-data-display.component';
import { SearchPipe } from '@app/shared/pipes/search.pipe';
import { ChangeExecutionDateComponent } from './components/change-execution-date/change-execution-date.component';
import { LoaderService } from './services/loader.service';

@NgModule({
  declarations: [
    FieldErrorDisplayComponent,
    ToastMessageComponent,
    SortFieldBySequencePipe,
    ToNumberPipe,
    ConfirmModalComponent,
    BulkActionModalComponent,
    FieldDataDisplayComponent,
    SearchPipe,
    ChangeExecutionDateComponent,
  ],
  providers: [SharedService, SortFieldBySequencePipe],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule,
    SyncfusionModules,
    NgxSkeletonLoaderModule
  ],

  exports: [
    // AuthLibModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    FieldErrorDisplayComponent,
    ToastMessageComponent,
    SortFieldBySequencePipe,
    ToNumberPipe,
    ConfirmModalComponent,
    NgxSkeletonLoaderModule,
    BulkActionModalComponent,
    FieldDataDisplayComponent,
    SearchPipe,
    ChangeExecutionDateComponent,
  ],
})
export class SharedModule {}
