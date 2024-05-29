import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../guards/guard.guard';
import { DatabaseService } from '../../shared/services/database.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatStepperModule } from '@angular/material/stepper';
import { SharedModuleModule } from '../../shared/shared-module/shared-module.module';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatOptionModule,
    MatCheckboxModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    SharedModuleModule

  ],
  providers: [
    AuthGuard,
    DatabaseService
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatOptionModule,
    MatCheckboxModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatStepperModule
  ]
})
export class CoreModule { }