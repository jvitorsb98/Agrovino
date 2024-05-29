import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Sessao } from '../../../shared/model/sessao';
import { Atividade } from '../../../shared/model/atividade';
import { Suino } from '../../../shared/model/suino';
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
  suinos: Suino[] = [];
  id = '';

  formSuinos: FormGroup = new FormGroup({});
  listaSuinos: Suino[] = [];
  suinosFiltrados: Suino[] = [];
  valorFiltro: string = '';
  valorPesquisa: any = '';
  minDate = new Date();

  constructor(private databaseService: DatabaseService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {
    this.formSuinos = this.formBuilder.group({});
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
  
    this.databaseService.getSuinosSessao(this.id).subscribe((response) => {
      const suinosRequests = response.map((suinoId: string) => this.databaseService.getSuinoPorBrinco(suinoId));
  
      // Esperar que todas as solicitações de suíno sejam concluídas
      forkJoin(suinosRequests).subscribe((suinoResponses: (Suino | null)[]) => {
        // Filtrar suínos nulos e adicionar suínos válidos à lista
        const filteredSuinoResponses = suinoResponses.filter(response => response !== null);
        filteredSuinoResponses.forEach(response => {
          if (this.isSuino(response)) { 
            this.suinos.push({
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
      
        this.suinosFiltrados = this.suinos;
      
        this.suinos.forEach((suino) => {
          if (suino && suino.brinco) { 
            this.formSuinos.addControl(suino.brinco, this.formBuilder.control(true));
          }
        });
      });
    });
  }
  

  checkAtividade(marcado: boolean) {
    this.suinosFiltrados.forEach((suino) => {
      let id = suino.brinco!;
      this.formSuinos.get(id)?.setValue(marcado);
    });
  }

  filtrarDataNascimento(data: Date) {
    // Formatar a data para 'yyyy-MM-dd'
    let data_pesquisa = this.formatarData(data);
    
    // Filtrar a listaSuinos pela data de nascimento
    return this.listaSuinos.filter(suino => this.formatarData(new Date(suino.dt_nasc)) === data_pesquisa);
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
    return this.listaSuinos.filter(suino => suino.brinco === brinco);
  }

  filtrarPai(brinco_pai: string) {
    return this.listaSuinos.filter(suino => suino.brinco_pai === brinco_pai);
  }

  filtrarMae(brinco_mae: string) {
    return this.listaSuinos.filter(suino => suino.brinco_mae === brinco_mae);
  }

  filtrarSexo(sexo: string) {
    return this.listaSuinos.filter(suino => suino.sexo === sexo);
  }

  filtrarListagem(filtro: string) {
    switch (filtro) {
      case 'brinco':
        this.suinosFiltrados = this.filtrarBrinco(this.valorPesquisa.toString());
        break;
      case 'brincoPai':
        this.suinosFiltrados = this.filtrarPai(this.valorPesquisa.toString());
        break;

      case 'brincoMae':
        this.suinosFiltrados = this.filtrarMae(this.valorPesquisa.toString());
        break;

      case 'dataNascimento':
        this.suinosFiltrados = this.filtrarDataNascimento(this.valorPesquisa);
        break;

      case 'sexo':
        this.suinosFiltrados = this.filtrarSexo(this.valorPesquisa);
        break;

      case '':
        this.suinosFiltrados = this.listaSuinos;
        break;
    }
  }

  limparFiltro(){
    this.suinosFiltrados = this.listaSuinos;
    this.valorPesquisa = '';
  }

  nextStep(atividade: Atividade): void {
    if(this.sessao){
      for(const suino of this.listaSuinos){
        this.databaseService.mudarStatusAtividade(this.sessao.id, atividade.id, suino.brinco!, this.formSuinos.get(suino.brinco!)?.value);
      }
    }
  }

  finalizarSessao(): void {
    this.databaseService.mudarStatusSessao(this.id, true);

    alert('Sessão finalizada com sucesso!');

    this.router.navigate(['listagem_sessoes']);
  }

  isSuino(obj: any): obj is Suino {
    return obj && obj.brinco !== undefined && obj.brinco_pai !== undefined &&
           obj.brinco_mae !== undefined && obj.dt_nasc !== undefined &&
           obj.dt_saida !== undefined && obj.status !== undefined &&
           obj.sexo !== undefined && obj.pesos !== undefined;
  }

}
