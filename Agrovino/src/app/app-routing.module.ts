import { HistoricoComponent } from './modules/feacture/historico/historico.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemBovinosComponent } from './modules/feacture/listagem-bovinos/listagem-bovinos.component';

import { PesagemBovinosComponent } from './modules/feacture/pesagem-bovinos/pesagem-bovinos.component';
import { HomeComponent } from './modules/core/home/home.component';
import { CadastroBovinoComponent } from './modules/feacture/cadastro-bovino/cadastro-bovino.component';
import { AuthGuard } from './modules/core/guards/guard.guard';
import { CadastrarPesoComponent } from './modules/feacture/cadastrar-peso/cadastrar-peso.component';
import { CadastrarSessaoComponent } from './modules/feacture/sessao/cadastrar-sessao/cadastrar-sessao.component';
import { FinalizarSecaoComponent } from './modules/feacture/sessao/finalizar-secao/finalizar-secao.component';
import { LoginComponent } from './modules/core/login/login.component';
import { CadastrarAtividadeComponent } from './modules/feacture/sessao/cadastrar-atividade/cadastrar-atividade.component';
import { ListarSecoesComponent } from './modules/feacture/sessao/listar-secoes/listar-secoes.component';
import { GraficoAtividadeComponent } from './modules/feacture/grafico-atividade/grafico-atividade.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'cadastro_bovino', component: CadastroBovinoComponent, canActivate: [AuthGuard] },
  { path: 'cadastro_peso_bovino', component: CadastrarPesoComponent, canActivate: [AuthGuard] },
  { path: 'listagem_peso_bovino', component: ListagemBovinosComponent, canActivate: [AuthGuard] },
  { path: 'listagem_peso_bovino_grafico', component: PesagemBovinosComponent, canActivate: [AuthGuard] },
  { path: 'cadastro_atividade', component: CadastrarAtividadeComponent, canActivate: [AuthGuard] },
  { path: 'cadastro_sessao', component: CadastrarSessaoComponent, canActivate: [AuthGuard] },
  { path: 'listagem_sessoes', component: ListarSecoesComponent , canActivate: [AuthGuard]},
  { path: 'sessao/finalizar/:id', component: FinalizarSecaoComponent, canActivate: [AuthGuard] },
  { path: 'historico/:id', component: HistoricoComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: LoginComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
