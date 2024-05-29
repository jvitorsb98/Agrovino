import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../../shared/services/database.service';

@Component({
  selector: 'app-editar-peso',
  templateUrl: './editar-peso.component.html',
  styleUrls: ['./editar-peso.component.css']
})
export class EditarPesoComponent {
  edicaoPesoForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditarPesoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private databaseService: DatabaseService // Injete o DatabaseService aqui
  ) {
    this.edicaoPesoForm = new FormGroup({
      novoPeso: new FormControl(data.bovino.pesos.find((peso: any) => peso.dt_pesagem === data.dataPesagem)?.peso, [Validators.required, Validators.min(0)]),
      novaData: new FormControl(data.dataPesagem, [Validators.required])
    });
  }

  salvarEdicao(): void {
    if (this.edicaoPesoForm.valid) {
      const novoPeso = this.edicaoPesoForm.get('novoPeso')!.value;
      const novaData = this.edicaoPesoForm.get('novaData')!.value;
      const bovino = this.data.bovino;
      const pesosAtualizados = bovino.pesos.map((peso: any) => {
        if (peso.dt_pesagem === novaData) {
          return { ...peso, peso: novoPeso };
        } else {
          return peso;
        }
      });

      this.dialogRef.close({ sucesso: true, bovinoAtualizado: { ...bovino, pesos: pesosAtualizados } });

    }
  }

  cancelar(): void {
    this.dialogRef.close(false);
  }
}