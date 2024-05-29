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
import { CadastroBovinoComponent } from '../cadastro-bovino/cadastro-bovino.component';
import { EditarPesoComponent } from '../editar-peso/editar-peso.component';
import { EditarBovinoComponent } from '../editar-bovino/editar-bovino.component';
import { PesagemBovinosComponent } from '../pesagem-bovinos/pesagem-bovinos.component';
import { CadastrarSessaoComponent } from '../sessao/cadastrar-sessao/cadastrar-sessao.component';
import { CadastrarAtividadeComponent } from '../sessao/cadastrar-atividade/cadastrar-atividade.component';
import { FinalizarSecaoComponent } from '../sessao/finalizar-secao/finalizar-secao.component';
import { ListarSecoesComponent } from '../sessao/listar-secoes/listar-secoes.component';
import { ListagemBovinosComponent } from '../listagem-bovinos/listagem-bovinos.component';
import { GraficoAtividadeComponent } from '../grafico-atividade/grafico-atividade.component';
import { HistoricoComponent } from '../historico/historico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    CadastrarPesoComponent,
    CadastroBovinoComponent,
    EditarPesoComponent,
    EditarBovinoComponent,
    PesagemBovinosComponent,
    CadastrarSessaoComponent,
    CadastrarAtividadeComponent,
    FinalizarSecaoComponent,
    ListarSecoesComponent,
    ListagemBovinosComponent,
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
    CadastroBovinoComponent,
    EditarPesoComponent,
    EditarBovinoComponent,
    PesagemBovinosComponent,
    CadastrarSessaoComponent,
    CadastrarAtividadeComponent,
    FinalizarSecaoComponent,
    ListarSecoesComponent,
    ListagemBovinosComponent,
    GraficoAtividadeComponent,
    HistoricoComponent
  ]
})
export class CoreFeatureModule { }
