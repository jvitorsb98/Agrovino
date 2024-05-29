import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sessao } from '../../../shared/model/sessao';
import { DatabaseService } from '../../../shared/services/database.service';

@Component({
  selector: 'app-listar-secoes',
  templateUrl: './listar-secoes.component.html',
  styleUrl: './listar-secoes.component.css'
})
export class ListarSecoesComponent {
  listaSessoes: Sessao[] = [];
  listaFiltrada: Sessao[] = [];
  valorFiltro: string = '';
  valorPesquisa: any = '';

  constructor(private dataBase: DatabaseService, private router: Router) {
    this.dataBase.getSessoes().subscribe((response) => {
      for (const key in response) {
        if (response.hasOwnProperty(key) && typeof response[key] === 'object') {
          const sessao = { ...response[key], id: key };
          this.listaSessoes.push(sessao);
        }
      }
    });
    this.listaFiltrada = this.listaSessoes;
  }

  filtrarData(data: Date) {
    const dataPesquisa = this.formatarData(data);
    return this.listaSessoes.filter(sessao => this.formatarData(sessao.data) === dataPesquisa);
  }
  
  private formatarData(data: Date): string {
    const year = data.getFullYear();
    const month = this.padZero(data.getMonth() + 1);
    const day = this.padZero(data.getDate());
    return `${year}-${month}-${day}`;
  }
  
  private padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  filtrarStatus(status: boolean){
    return this.listaSessoes.filter(sessao => sessao.status === status);
  }

  
  filtrarListagem(filtro: string){
    switch (filtro){
      case 'data':
        this.listaFiltrada = this.filtrarData(this.valorPesquisa);
        break;

      case 'status':
        this.listaFiltrada = this.filtrarStatus(this.valorPesquisa);
        break;
    }
  }

  verificarAtraso(data: Date){
    let data_sessao = new Date(data);
    let data_atual = new Date();

    data_atual.setDate(data_atual.getDate() - 1);

    return data_sessao < data_atual;
  }

  limparFiltro(){
    this.listaFiltrada = this.listaSessoes;
    this.valorPesquisa = '';
  }

  finalizarSessao(id: string){
    this.router.navigate(['sessao/finalizar', id]);
  }
}
