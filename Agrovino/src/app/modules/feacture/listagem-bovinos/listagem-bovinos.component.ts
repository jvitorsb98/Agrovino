import { Component, PipeTransform } from '@angular/core';
import { Bovino } from '../../shared/model/bovino';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DecimalPipe } from '@angular/common';
import { CampoBovino } from '../../shared/model/Enums/CampoBovino';
import { EditarBovinoComponent } from '../editar-bovino/editar-bovino.component';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from '../../shared/services/database.service';
import { IdadePipe } from '../../shared/pipes/idade.pipe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listagem-bovinos',
  templateUrl: './listagem-bovinos.component.html',
  styleUrls: ['./listagem-bovinos.component.css'],
  providers: [DecimalPipe],
})
export class ListagemBovinosComponent {
  bovinosFiltrados$: Observable<Bovino[]> | undefined;
  filter = new FormControl('');
  camposBovino = Object.values(CampoBovino);
  campoSelecionado: CampoBovino = CampoBovino.brinco;

  listaBovinos: Bovino[] = [];

  constructor(private pipe: DecimalPipe, public dialog: MatDialog, private dados: DatabaseService, private router: Router) {
    this.atualizaLista();
  }

  atualizaLista(){
    this.dados.getBovinos().subscribe((bovinos: Bovino[]) => {
      this.listaBovinos = Object.values(bovinos);

      this.configurarFiltragem();
    });
  }

  // Configura a filtragem para reagir às mudanças no filtro
  configurarFiltragem(): void {
    this.bovinosFiltrados$ = this.filter.valueChanges.pipe(
      startWith(''), // Emite um valor inicial vazio
      map((valor) => this.filtrarBovinos(valor))
    );
  }
  

  filtrarBovinos(valor: string | null): Bovino[] {
    if (!valor || !this.campoSelecionado) {
      return this.listaBovinos;
    }

    const termo = valor.toLowerCase();
    return this.listaBovinos.filter((bovino) => {
      const valorCampo = bovino[this.campoSelecionado]!.toLowerCase();
      return valorCampo.includes(termo);
    });
  }


  onExcluir(bovino: Bovino): void {
    if (confirm("Deseja remover este suíno?")) {
      this.dados.deletaBovino(bovino.brinco!).subscribe(() => {
        this.atualizaLista();
      });
    }
  }

  
  onEditar(bovino: Bovino): void {
    const dialogRef = this.dialog.open(EditarBovinoComponent, {
      width: '500px',
      data: bovino
    });

  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dados.getBovinoPorBrinco(bovino.brinco!).subscribe(() => {
            this.atualizaLista();
        });
      }
    });
  }
  
  
  onHistorico(brinco: string) {
    this.router.navigate(['historico', brinco]);
  }
  
  
}
