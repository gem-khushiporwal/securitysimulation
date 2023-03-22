import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { OnboardresComponent } from './onboard/onboardres/onboardres.component';
import { CustomtemplateComponent } from './customtemplate/customtemplate.component';
import { ScheduledCampaignsComponent } from './scheduled-campaigns/scheduled-campaigns.component';
import { DashboardAdminComponent } from './dashboard/dashboard-admin/dashboard-admin/dashboard-admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserManualComponent } from './user-manual/user-manual.component';
import { ClientInviteComponent } from './dashboard/dashboard-super-admin/Client-invite/client-invite/client-invite.component';
import { DashboardSuperAdminComponent } from './dashboard/dashboard-super-admin/dashboad-landing/dashboard-super-admin.component';
import { MatIconModule } from '@angular/material/icon';
import { ClientdetailsComponent } from './dashboard/dashboard-super-admin/Client-view/clientdetails/clientdetails.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EmployeeLearningComponent } from './dashboard/dashboard-emp/employee-learning/employee-learning.component';
import { DashboardEmpComponent } from './dashboard/dashboard-emp/dashboard-superadmin/dashboard-emp.component';
@NgModule({
  declarations: [
    AddCampaignComponent,
    LoginComponent,
    SignUpComponent,
    OnboardresComponent,
    CustomtemplateComponent,
    ScheduledCampaignsComponent,
    UserManualComponent,
    ClientInviteComponent,
    ErrorPageComponent,
    DashboardEmpComponent,
    EmployeeLearningComponent
  ],
  imports: [
    SharedModule,
    MainRoutingModule,
    MatIconModule,
  ]
})
export class MainModule { }
