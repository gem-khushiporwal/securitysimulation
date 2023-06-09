import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/AuthGuard/auth.guard';
import { ConfirmationModalComponent } from 'src/app/shared/confirmation-modal/confirmation-modal.component';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';
import { CampaignViewComponent } from './campaign-view/campaign-view.component';
import { CustomtemplateComponent } from './customtemplate/customtemplate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { GiftComponent } from './gift/gift.component';
import { LoginComponent } from './login/login.component';
import { OnboardresComponent } from './onboard/onboardres/onboardres.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'',
  component:LoginComponent
},
  {
  path:'login',
  component:LoginComponent
},
  {
  path:'misapprasial-login',
  component: GiftComponent,
},
{
  path:'mis-apprasialportal-dashboard',
  component: ErrorPageComponent,
}

,{
  path:'add-campaign',
  canActivate:[AuthGuard],
  component:AddCampaignComponent
},

{
  path:'dashboard',
  canActivate:[AuthGuard],
  component:DashboardComponent
},{
  path:'view/:id',
  canActivate:[AuthGuard],
  component:CampaignViewComponent
},{
  path:'sign-up',
  component:SignUpComponent
},
{
  path:'onboard',
  component:OnboardresComponent
},
{
  path:'customtemplate',
  canActivate:[AuthGuard],
  component:CustomtemplateComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
