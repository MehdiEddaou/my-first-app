import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FooterOnlyLayoutComponent } from './footer-only-layout/footer-only-layout.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
      { path: 'users', loadChildren: '../users/users.module#UsersModule' },
      { path: 'account-settings', loadChildren: '../account-settings/account-settings.module#AccountSettingsModule' },
    ]
  },
  {
    path: '',
    component: FooterOnlyLayoutComponent,
    children: [
      { path: 'login', loadChildren: '../login/login.module#LoginModule' },
      { path: 'registration', loadChildren: '../registration/registration.module#RegistrationModule' }
    ]
  },
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
