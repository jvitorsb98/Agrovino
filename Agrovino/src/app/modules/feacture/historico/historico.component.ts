import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../shared/services/database.service';
import { ActivatedRoute } from '@angular/router';
import { Bovino } from '../../shared/model/bovino';

interface HistoricoItem {
  data: Date;
  descricao: string;
  detalhes: string;
}

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {
  bovino: Bovino = {} as Bovino;
  id = '';
  mostrarGraficoPeso = false;
  mostrarGraficoAtividade = false;
  historico: HistoricoItem[] = [];
  atividadesBanco: { [key: string]: { descricao: string, id: string } } = {};

  constructor(
    private dataBase: DatabaseService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';

    this.dataBase.getBovinoPorBrinco(this.id).subscribe((response) => {
      if (response) {
        this.bovino = response;
        this.bovino.brinco = this.id;
      } else {
        console.log("Suíno não encontrado");
      }
    });

    this.dataBase.getHistoricoBovino(this.id).subscribe((response: HistoricoItem[]) => {
      this.historico = response;
    });
  }

  formatarData(data: Date): string {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  exibirGraficoPeso() {
    this.mostrarGraficoPeso = !this.mostrarGraficoPeso;
  }

  exibirGraficoAtividade() {
    this.mostrarGraficoAtividade = !this.mostrarGraficoAtividade;
  }
}
