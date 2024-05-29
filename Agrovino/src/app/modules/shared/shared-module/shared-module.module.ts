import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdadePipe } from '../pipes/idade.pipe';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../services/database.service';
import { SuinosService } from '../services/suinos.service';
import { AuthService } from '../services/auth.service';


@NgModule({
  declarations: [
    IdadePipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    HttpClient,
    DatabaseService,
    SuinosService,
    AuthService
  ],
  exports: [
    IdadePipe
  ]
})
export class SharedModuleModule { }
