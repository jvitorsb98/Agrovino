import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';

import { HttpClientModule } from '@angular/common/http';


import { AuthService } from './modules/shared/services/auth.service';
import { CoreModule } from './modules/core/core-module/core-module.module';
import { SharedModuleModule } from './modules/shared/shared-module/shared-module.module';
import { CoreFeatureModule } from './modules/feacture/core-feacture/core-feacture.module';
import { HistoricoComponent } from './modules/feacture/historico/historico.component';
import { GraficoAtividadeComponent } from './modules/feacture/grafico-atividade/grafico-atividade.component';
import { FooterComponent } from './modules/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    SharedModuleModule,
    CoreFeatureModule

  ],
  providers: [
    AuthService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }