import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SharedModuleModule } from '../../shared/shared-module/shared-module.module';
import { CoreModule } from '../../core/core-module/core-module.module';
import { DatabaseService } from '../../shared/services/database.service';
import { CadastrarPesoComponent } from '../cadastrar-peso/cadastrar-peso.component';
import { CadastroSuinoComponent } from '../cadastro-suino/cadastro-suino.component';
import { EditarPesoComponent } from '../editar-peso/editar-peso.component';
import { EditarSuinoComponent } from '../editar-suino/editar-suino.component';
import { PesagemSuinosComponent } from '../pesagem-suinos/pesagem-suinos.component';
import { CadastrarSessaoComponent } from '../sessao/cadastrar-sessao/cadastrar-sessao.component';
import { CadastrarAtividadeComponent } from '../sessao/cadastrar-atividade/cadastrar-atividade.component';
import { FinalizarSecaoComponent } from '../sessao/finalizar-secao/finalizar-secao.component';
import { ListarSecoesComponent } from '../sessao/listar-secoes/listar-secoes.component';
import { ListagemSuinosComponent } from '../listagem-suinos/listagem-suinos.component';
import { GraficoAtividadeComponent } from '../grafico-atividade/grafico-atividade.component';
import { HistoricoComponent } from '../historico/historico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    CadastrarPesoComponent,
    CadastroSuinoComponent,
    EditarPesoComponent,
    EditarSuinoComponent,
    PesagemSuinosComponent,
    CadastrarSessaoComponent,
    CadastrarAtividadeComponent,
    FinalizarSecaoComponent,
    ListarSecoesComponent,
    ListagemSuinosComponent,
    GraficoAtividadeComponent,
    HistoricoComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatDialogModule,
    BrowserAnimationsModule,
    SharedModuleModule,
    CoreModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [DatabaseService],
  exports: [
    CadastrarPesoComponent,
    CadastroSuinoComponent,
    EditarPesoComponent,
    EditarSuinoComponent,
    PesagemSuinosComponent,
    CadastrarSessaoComponent,
    CadastrarAtividadeComponent,
    FinalizarSecaoComponent,
    ListarSecoesComponent,
    ListagemSuinosComponent,
    GraficoAtividadeComponent,
    HistoricoComponent
  ]
})
export class CoreFeatureModule { }
