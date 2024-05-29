import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js/auto';
import { Bovino } from '../../shared/model/bovino';
import { EditarPesoComponent } from '../editar-peso/editar-peso.component';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from '../../shared/services/database.service';

@Component({
  selector: 'app-pesagem-bovinos',
  templateUrl: './pesagem-bovinos.component.html',
  styleUrls: ['./pesagem-bovinos.component.css']
})
export class PesagemBovinosComponent implements OnInit {
  @ViewChild("graficoBovinos") elemento!: ElementRef;

  brincoBovino: string = "";
  bovinoEncontrado: boolean = false;
  bovinoSelecionado: Bovino | null = null;

  constructor(private databaseService: DatabaseService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.buscarBovino();
  }

  buscarBovino() {
    this.databaseService.getBovinoPorBrinco(this.brincoBovino)
      .subscribe(
        bovino => {
          this.bovinoSelecionado = bovino;
          this.bovinoEncontrado = bovino !== null;
          if (this.bovinoEncontrado) {
            this.renderizarGrafico();
          }
        },
        error => {
          console.error("Erro ao buscar o suíno:", error);
          this.bovinoEncontrado = false;
          this.bovinoSelecionado = null;
        }
      );
  }

  editarPeso(bovino: Bovino | null, dataPesagem: string) {

    if(bovino == null || dataPesagem==null){
      return;
    }

    const dialogRef = this.dialog.open(EditarPesoComponent, {
      width: '500px',
      data: {
        bovino: bovino,
        dataPesagem: dataPesagem
      }
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result && result.bovinoAtualizado) {
        // Atualiza o suíno com os dados atualizados
        const bovinoAtualizado = result.bovinoAtualizado;
        this.databaseService.atualizeBovino(bovinoAtualizado.brinco, bovinoAtualizado)
          .subscribe(
            () => {
              console.log('Suíno atualizado com sucesso:');
              // Atualiza o suíno selecionado
              this.bovinoSelecionado = bovinoAtualizado;
              // Renderiza o gráfico com os dados atualizados
              this.renderizarGrafico();
            },
            error => {
              console.error('Erro ao atualizar o suíno:', error);
            }
          );
      }
    });

  }
  

  renderizarGrafico() {
    if (!this.elemento) {
      return;
    }


    // Destruir o gráfico anterior, se existir
    Chart.register(...registerables);
    Chart.getChart(this.elemento.nativeElement)?.destroy();

    const pesos = this.bovinoSelecionado!.pesos.map(peso => peso.peso);
    const datas = this.bovinoSelecionado!.pesos.map(peso => peso.dt_pesagem);



    new Chart(this.elemento.nativeElement, {
      type: 'bar',
      data: {
        labels: datas,
        datasets: [
          {
            label: 'Peso',
            data: pesos,
            backgroundColor: '#5daa0094',
            barThickness: 35
          }
        ]
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Evolução do Peso em relação ao tempo'
          }
        },
        elements: {
          bar: {
            borderRadius: 4
          }
        },
        responsive: true,
      },
    });
  }
}
