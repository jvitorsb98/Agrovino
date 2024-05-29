import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Suino } from '../../shared/model/suino';

@Component({
  selector: 'app-grafico-atividade',
  templateUrl: './grafico-atividade.component.html',
  styleUrls: ['./grafico-atividade.component.css']
})


export class GraficoAtividadeComponent implements OnInit {
  @ViewChild("meuCanvas") elemento!: ElementRef;

  @Input() selectedSuino: Suino | undefined;
  @Input() sessoes: any[] = [];
  @Input() atividadesBanco: { [key: string]: { descricao: string, id: string } } = {};

  chart!: Chart;
  atividades: any[] = [];
  contagemAtividades: { [key: string]: number } = {};

  ngOnInit() {
    this.processarDados();
    this.inicializarGrafico();
  }

  processarDados() {
    this.sessoes.forEach((sessao) => {
      if (sessao.suinos.includes(this.selectedSuino?.brinco)) {
        sessao.atividades.forEach((atividadeId: string) => {
          const atividade = this.atividadesBanco[atividadeId];
          if (atividade) {
            this.atividades.push(atividade);
            this.contagemAtividades[atividade.id] = (this.contagemAtividades[atividade.id] || 0) + 1;
          }
        });
      }
    });

    // Remove duplicatas e ordena as atividades
    this.atividades = this.atividades.filter((item, index, self) =>
      index === self.findIndex((t) => (
        t.id === item.id
      ))
    ).sort((a, b) => a.descricao.localeCompare(b.descricao));
  }

  inicializarGrafico() {
    if (this.chart) {
      this.chart.destroy();
    }

    this.delay(1000).then(() => {
      Chart.register(...registerables);

      const labelsSuino = this.atividades.map(item => item.descricao);
      const dataSuino = this.atividades.map(item => this.contagemAtividades[item.id]);

      this.chart = new Chart(this.elemento.nativeElement, {
        type: 'bar',
        data: {
          labels: labelsSuino,
          datasets: [
            {
              label: "Qtde de Aplicações",
              data: dataSuino,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              barThickness: 35
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          elements: {
            bar: {
              borderRadius: 4
            }
          },
          plugins: {
            title: {
              display: true,
              text: 'Histórico de Atividades'
            }
          }
        }
      });
    });
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}