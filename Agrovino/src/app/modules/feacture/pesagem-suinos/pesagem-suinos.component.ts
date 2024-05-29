import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js/auto';
import { Suino } from '../../shared/model/suino';
import { EditarPesoComponent } from '../editar-peso/editar-peso.component';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from '../../shared/services/database.service';

@Component({
  selector: 'app-pesagem-suinos',
  templateUrl: './pesagem-suinos.component.html',
  styleUrls: ['./pesagem-suinos.component.css']
})
export class PesagemSuinosComponent implements OnInit {
  @ViewChild("graficoSuinos") elemento!: ElementRef;

  brincoSuino: string = "";
  suinoEncontrado: boolean = false;
  suinoSelecionado: Suino | null = null;

  constructor(private databaseService: DatabaseService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.buscarSuino();
  }

  buscarSuino() {
    this.databaseService.getSuinoPorBrinco(this.brincoSuino)
      .subscribe(
        suino => {
          this.suinoSelecionado = suino;
          this.suinoEncontrado = suino !== null;
          if (this.suinoEncontrado) {
            this.renderizarGrafico();
          }
        },
        error => {
          console.error("Erro ao buscar o suíno:", error);
          this.suinoEncontrado = false;
          this.suinoSelecionado = null;
        }
      );
  }

  editarPeso(suino: Suino | null, dataPesagem: string) {

    if(suino == null || dataPesagem==null){
      return;
    }

    const dialogRef = this.dialog.open(EditarPesoComponent, {
      width: '500px',
      data: {
        suino: suino,
        dataPesagem: dataPesagem
      }
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result && result.suinoAtualizado) {
        // Atualiza o suíno com os dados atualizados
        const suinoAtualizado = result.suinoAtualizado;
        this.databaseService.atualizeSuino(suinoAtualizado.brinco, suinoAtualizado)
          .subscribe(
            () => {
              console.log('Suíno atualizado com sucesso:');
              // Atualiza o suíno selecionado
              this.suinoSelecionado = suinoAtualizado;
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

    const pesos = this.suinoSelecionado!.pesos.map(peso => peso.peso);
    const datas = this.suinoSelecionado!.pesos.map(peso => peso.dt_pesagem);



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
