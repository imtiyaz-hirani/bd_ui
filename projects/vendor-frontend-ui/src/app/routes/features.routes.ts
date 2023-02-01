import { Routes } from '@angular/router';
export const featuresRoutes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'payments',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('../features/home/home.module').then((m) => m.HomeModule),
  // },
  // {
  //   path: 'dashboard',
  //   loadChildren: () =>
  //     import('../features/dashboard/dashboard.module').then(
  //       (m) => m.DashboardModule
  //     ),
  // },
  // {
  //   path: 'payments',
  //   loadChildren: () =>
  //     import('../features/payments/payments.module').then(
  //       (module) => module.PaymentsModule
  //     ),
  // },
  // {
  //   path: 'accounts',
  //   loadChildren: () =>
  //     import('../features/accounts/accounts.module').then(
  //       (module) => module.AccountsModule
  //     ),
  // },
  // {
  //   path: 'masterdata',
  //   loadChildren: () =>
  //     import('../features/master-data/master-data.module').then(
  //       (module) => module.MasterDataModule
  //     ),
  // },
  // {
  //   path: 'settings',
  //   loadChildren: () =>
  //     import('../features/settings/settings.module').then(
  //       (module) => module.SettingsModule
  //     ),
  // },
  // {
  //   path: 'others',
  //   loadChildren: () =>
  //     import('../features/others/others.module').then((m) => m.OthersModule),
  // },
  // {
  //   path: 'collections',
  //   loadChildren: () =>
  //     import('../features/collections/collections.module').then(
  //       (module) => module.CollectionsModule
  //     ),
  // },
  {
   path: '',
     redirectTo: 'vendor',
   pathMatch: 'full',
  },
  {
    path: 'vendor',
    loadChildren: () =>
      import('../features/vendor/vendor.module').then(
         (module) => module.VendorModule
        ),
     },
  { path: '**', redirectTo: 'home' },
];
