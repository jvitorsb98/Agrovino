import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Sessao } from '../../../shared/model/sessao';
import { Atividade } from '../../../shared/model/atividade';
import { Bovino } from '../../../shared/model/bovino';
import { DatabaseService } from '../../../shared/services/database.service';



@Component({
  selector: 'app-finalizar-secao',
  templateUrl: './finalizar-secao.component.html',
  styleUrl: './finalizar-secao.component.css'
})
export class FinalizarSecaoComponent implements OnInit {
  sessao: Sessao | undefined;
  atividadesSessao: Atividade[] = [];
  atividades: Atividade[] = [];
  bovinos: Bovino[] = [];
  id = '';

  formBovinos: FormGroup = new FormGroup({});
  listaBovinos: Bovino[] = [];
  bovinosFiltrados: Bovino[] = [];
  valorFiltro: string = '';
  valorPesquisa: any = '';
  minDate = new Date();

  constructor(private databaseService: DatabaseService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {
    this.formBovinos = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
  
    this.databaseService.getSessao(this.id).subscribe((response: Sessao) => {
      this.sessao = response;
      this.sessao.id = this.id;
    });
  
    this.databaseService.buscarAtividadesDaSessao(this.id).subscribe((response) => {
      for (const key in response) {
        if (response.hasOwnProperty(key)) {
          this.atividadesSessao.push({ ...response[key], id: response[key].id });
        }
      }
  
      for (const atividade of this.atividadesSessao) {
        this.databaseService.getAtividade(atividade.id).subscribe((response: Atividade) => {
          response.id = atividade.id;
          this.atividades.push(response);
        });
      }
    });
  
    this.databaseService.getBovinosSessao(this.id).subscribe((response) => {
      const bovinosRequests = response.map((bovinoId: string) => this.databaseService.getBovinoPorBrinco(bovinoId));
  
      // Esperar que todas as solicitações de suíno sejam concluídas
      forkJoin(bovinosRequests).subscribe((bovinoResponses: (Bovino | null)[]) => {
        // Filtrar suínos nulos e adicionar suínos válidos à lista
        const filteredBovinoResponses = bovinoResponses.filter(response => response !== null);
        filteredBovinoResponses.forEach(response => {
          if (this.isBovino(response)) { 
            this.bovinos.push({
              brinco: response.brinco,
              brinco_pai: response.brinco_pai,
              brinco_mae: response.brinco_mae,
              dt_nasc: response.dt_nasc,
              dt_saida: response.dt_saida,
              status: response.status,
              sexo: response.sexo,
              pesos: response.pesos
            });
          }
        });
      
        this.bovinosFiltrados = this.bovinos;
      
        this.bovinos.forEach((bovino) => {
          if (bovino && bovino.brinco) { 
            this.formBovinos.addControl(bovino.brinco, this.formBuilder.control(true));
          }
        });
      });
    });
  }
  

  checkAtividade(marcado: boolean) {
    this.bovinosFiltrados.forEach((bovino) => {
      let id = bovino.brinco!;
      this.formBovinos.get(id)?.setValue(marcado);
    });
  }

  filtrarDataNascimento(data: Date) {
    // Formatar a data para 'yyyy-MM-dd'
    let data_pesquisa = this.formatarData(data);
    
    // Filtrar a listaBovinos pela data de nascimento
    return this.listaBovinos.filter(bovino => this.formatarData(new Date(bovino.dt_nasc)) === data_pesquisa);
  }
  
  formatarData(data: Date): string {
    // Obter o ano, mês e dia da data
    let ano = data.getFullYear();
    let mes = (data.getMonth() + 1).toString().padStart(2, '0');
    let dia = data.getDate().toString().padStart(2, '0');
    
    // Retornar a data formatada
    return `${ano}-${mes}-${dia}`;
  }

  filtrarBrinco(brinco: string) {
    return this.listaBovinos.filter(bovino => bovino.brinco === brinco);
  }

  filtrarPai(brinco_pai: string) {
    return this.listaBovinos.filter(bovino => bovino.brinco_pai === brinco_pai);
  }

  filtrarMae(brinco_mae: string) {
    return this.listaBovinos.filter(bovino => bovino.brinco_mae === brinco_mae);
  }

  filtrarSexo(sexo: string) {
    return this.listaBovinos.filter(bovino => bovino.sexo === sexo);
  }

  filtrarListagem(filtro: string) {
    switch (filtro) {
      case 'brinco':
        this.bovinosFiltrados = this.filtrarBrinco(this.valorPesquisa.toString());
        break;
      case 'brincoPai':
        this.bovinosFiltrados = this.filtrarPai(this.valorPesquisa.toString());
        break;

      case 'brincoMae':
        this.bovinosFiltrados = this.filtrarMae(this.valorPesquisa.toString());
        break;

      case 'dataNascimento':
        this.bovinosFiltrados = this.filtrarDataNascimento(this.valorPesquisa);
        break;

      case 'sexo':
        this.bovinosFiltrados = this.filtrarSexo(this.valorPesquisa);
        break;

      case '':
        this.bovinosFiltrados = this.listaBovinos;
        break;
    }
  }

  limparFiltro(){
    this.bovinosFiltrados = this.listaBovinos;
    this.valorPesquisa = '';
  }

  nextStep(atividade: Atividade): void {
    if(this.sessao){
      for(const bovino of this.listaBovinos){
        this.databaseService.mudarStatusAtividade(this.sessao.id, atividade.id, bovino.brinco!, this.formBovinos.get(bovino.brinco!)?.value);
      }
    }
  }

  finalizarSessao(): void {
    this.databaseService.mudarStatusSessao(this.id, true);

    alert('Sessão finalizada com sucesso!');

    this.router.navigate(['listagem_sessoes']);
  }

  isBovino(obj: any): obj is Bovino {
    return obj && obj.brinco !== undefined && obj.brinco_pai !== undefined &&
           obj.brinco_mae !== undefined && obj.dt_nasc !== undefined &&
           obj.dt_saida !== undefined && obj.status !== undefined &&
           obj.sexo !== undefined && obj.pesos !== undefined;
  }

}
