import { Component, PipeTransform } from '@angular/core';
import { Suino } from '../../shared/model/suino';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DecimalPipe } from '@angular/common';
import { CampoSuino } from '../../shared/model/Enums/CampoSuino';
import { EditarSuinoComponent } from '../editar-suino/editar-suino.component';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from '../../shared/services/database.service';
import { IdadePipe } from '../../shared/pipes/idade.pipe';


@Component({
  selector: 'app-listagem-suinos',
  templateUrl: './listagem-suinos.component.html',
  styleUrls: ['./listagem-suinos.component.css'],
  providers: [DecimalPipe],
})
export class ListagemSuinosComponent {
  suinosFiltrados$: Observable<Suino[]> | undefined;
  filter = new FormControl('');
  camposSuino = Object.values(CampoSuino);
  campoSelecionado: CampoSuino = CampoSuino.brinco;

  listaSuinos: Suino[] = [];

  constructor(private pipe: DecimalPipe, public dialog: MatDialog, private dados: DatabaseService) {
    this.atualizaLista();
  }

  atualizaLista(){
    this.dados.getSuinos().subscribe((suinos: Suino[]) => {
      this.listaSuinos = Object.values(suinos);

      this.configurarFiltragem();
    });
  }

  // Configura a filtragem para reagir às mudanças no filtro
  configurarFiltragem(): void {
    this.suinosFiltrados$ = this.filter.valueChanges.pipe(
      startWith(''), // Emite um valor inicial vazio
      map((valor) => this.filtrarSuinos(valor))
    );
  }
  

  filtrarSuinos(valor: string | null): Suino[] {
    if (!valor || !this.campoSelecionado) {
      return this.listaSuinos;
    }

    const termo = valor.toLowerCase();
    return this.listaSuinos.filter((suino) => {
      const valorCampo = suino[this.campoSelecionado]!.toLowerCase();
      return valorCampo.includes(termo);
    });
  }


  onExcluir(suino: Suino): void {
    if (confirm("Deseja remover este suíno?")) {
      this.dados.deletaSuino(suino.brinco!).subscribe(() => {
        this.atualizaLista();
      });
    }
  }

  
  onEditar(suino: Suino): void {
    const dialogRef = this.dialog.open(EditarSuinoComponent, {
      width: '500px',
      data: suino
    });

  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dados.getSuinoPorBrinco(suino.brinco!).subscribe(() => {
            this.atualizaLista();
        });
      }
    });
  }
  
  
  
  
  
}
