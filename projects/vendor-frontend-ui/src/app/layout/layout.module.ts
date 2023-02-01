
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemesService } from '@app/core/themes/themes.service';
import { TranslatorService } from '@app/core/translator/translator.service';
import { BreadcrumbData } from '@app/shared/components/breadcrumb';
import { BreadcrumbModule } from '@app/shared/components/breadcrumb/breadcrumb.module';
import { SharedModule } from '@app/shared/shared.module';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { featuresRoutes } from '../routes/features.routes';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout.component';
import { OffSidebarModule } from './off-sidebar/off-sidebar.module';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: featuresRoutes,
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SidebarModule,
    TextBoxModule,
    RouterModule.forChild(routes),
    OffSidebarModule,
    BreadcrumbModule,
  ],
  exports: [RouterModule],
  providers: [TranslatorService, ThemesService, BreadcrumbData],
})
export class LayoutModule {}
