import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdadePipe } from '../pipes/idade.pipe';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from '../services/database.service';
import { BovinosService } from '../services/bovinos.service';
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
    BovinosService,
    AuthService
  ],
  exports: [
    IdadePipe
  ]
})
export class SharedModuleModule { }
