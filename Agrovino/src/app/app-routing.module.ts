import { HistoricoComponent } from './modules/feacture/historico/historico.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemSuinosComponent } from './modules/feacture/listagem-suinos/listagem-suinos.component';

import { PesagemSuinosComponent } from './modules/feacture/pesagem-suinos/pesagem-suinos.component';
import { HomeComponent } from './modules/core/home/home.component';
import { CadastroSuinoComponent } from './modules/feacture/cadastro-suino/cadastro-suino.component';
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
  { path: 'cadastro_suino', component: CadastroSuinoComponent, canActivate: [AuthGuard] },
  { path: 'cadastro_peso_suino', component: CadastrarPesoComponent, canActivate: [AuthGuard] },
  { path: 'listagem_peso_suino', component: ListagemSuinosComponent, canActivate: [AuthGuard] },
  { path: 'listagem_peso_suino_grafico', component: PesagemSuinosComponent, canActivate: [AuthGuard] },
  { path: 'cadastro_atividade', component: CadastrarAtividadeComponent, canActivate: [AuthGuard] },
  { path: 'cadastro_sessao', component: CadastrarSessaoComponent, canActivate: [AuthGuard] },
  { path: 'listagem_sessoes', component: ListarSecoesComponent , canActivate: [AuthGuard]},
  { path: 'sessao/finalizar/:id', component: FinalizarSecaoComponent, canActivate: [AuthGuard] },
  { path: 'historico/:id', component: HistoricoComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: LoginComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
