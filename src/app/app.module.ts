import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiInterceptorService } from './services/api-interceptor.service';
import {ConfirmationModalComponent} from './shared/confirmation-modal/confirmation-modal.component';
import {NavbarComponent} from '../app/navbar/navbar.component';
import { ChartsModule } from 'ng2-charts';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatTableExporterModule } from 'mat-table-exporter';
import { ToastrModule } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InteractionType, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './app.config';
import { MsalGuard, MsalBroadcastService, MsalModule, MsalService, MSAL_GUARD_CONFIG, MSAL_INSTANCE, MsalGuardConfiguration, MsalRedirectComponent } from '@azure/msal-angular';
import { LoaderService } from './modules/main/service/loader.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ScheduleCampComponent } from './shared/schedule-camp/schedule-camp.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { RescheduleComponent } from './shared/reschedule/reschedule.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InfomodalComponent } from './shared/infomodal/infomodal.component';
import { CsvmessageComponent } from './shared/csvmessage/csvmessage.component';
import { SamplecsvComponent } from './shared/samplecsv/samplecsv.component';
import { SendcampaignComponent } from './modules/main/sendcampaign/sendcampaign.component';
import { SchedulelaterComponent } from './modules/main/schedulelater/schedulelater.component';
import { ReconfirmModalComponent } from './shared/reconfirm-modal/reconfirm-modal.component';
import { CampaignConfirmComponent } from './shared/campaign-confirm/campaign-confirm.component';
import { AddCampaignComponent } from './modules/main/add-campaign/add-campaign.component';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication(msalConfig);
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return { 
    interactionType: InteractionType.Redirect,
  };
}
@NgModule({
  declarations: [
    AppComponent,
    ConfirmationModalComponent,
    NavbarComponent,
    SchedulelaterComponent,
    SendcampaignComponent,
    ScheduleCampComponent,
    RescheduleComponent,
    InfomodalComponent,
    CsvmessageComponent,
    SamplecsvComponent,
    ReconfirmModalComponent,
    CampaignConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    ChartsModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatTableExporterModule,
    MatButtonModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    NgxMaterialTimepickerModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTooltipModule,
  ],
  providers: [ LoaderService,
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useFactory: MSALGuardConfigFactory
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService, 
    { provide: 'BASE_API_URL', useValue: environment.apiUrl },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorService, multi: true }],
      bootstrap: [AppComponent] 
    })
export class AppModule { }
