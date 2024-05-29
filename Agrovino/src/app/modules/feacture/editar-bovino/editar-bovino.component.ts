import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DatabaseService } from '../../shared/services/database.service';
import { Bovino } from '../../shared/model/bovino';


@Component({
  selector: 'app-editar-bovino',
  templateUrl: './editar-bovino.component.html',
  styleUrl: './editar-bovino.component.css',
})
export class EditarBovinoComponent {
  cadastro_bovino: FormGroup;
  lista_status: string[] = ['Ativo', 'Vendido', 'Morto'];
  bovino: any;
  sexo: string = '';

  constructor(public dialogRef: MatDialogRef<EditarBovinoComponent>,@Inject(MAT_DIALOG_DATA) public data: any,
  private dados:DatabaseService)
   {
    this.bovino = {...data};
    this.sexo = this.bovino.sexo;
    this.cadastro_bovino = new FormGroup({
      brinco: new FormControl(this.data.brinco, [Validators.required, Validators.pattern('[0-9]+$')]),
      brinco_pai: new FormControl(this.data.brinco_pai, [Validators.required, Validators.pattern('[0-9]+$')]),
      brinco_mae: new FormControl(this.data.brinco_mae, [Validators.required, Validators.pattern('[0-9]+$')]),
      dt_nasc: new FormControl(this.data.dt_nasc, [Validators.required, this.dataNascimentoValidator]),
      dt_saida: new FormControl(this.data.dt_saida, [Validators.required, this.dataSaidaValidator]),
      status: new FormControl(this.data.status, [Validators.required]),
      sexo: new FormControl(this.data.sexo, [Validators.required]),
    });
  }


  // Data de nascimento Validator

  dataNascimentoValidator = () => {
    // Verifica se o formulário está inicializado
    if (!this.cadastro_bovino) {
      return null;
    }

    const dataNascimento = this.cadastro_bovino.get('dt_nasc')?.value;

    // Verifica se a data de nascimento foi preenchida
    if (!dataNascimento) {
      return null;
    }

    const hoje = new Date();
    const nascimento = new Date(dataNascimento);

    return hoje <= nascimento ? { invalido: true } : null;
  };

  dataSaidaValidator = () => {
    // Verifica se o formulário está inicializado
    if (!this.cadastro_bovino) {
      return null;
    }

    const dataSaida = this.cadastro_bovino.get('dt_saida')?.value;
    const dataNascimento = this.cadastro_bovino.get('dt_nasc')?.value;

    // Verifica se a data de nascimento foi preenchida
    if (!dataSaida || !dataNascimento) {
      return null;
    }

    const nascimento = new Date(dataNascimento);
    const saida = new Date(dataSaida);

    return nascimento > saida ? { invalido: true } : null;
  };

  salvarAlteracoes(): void {
    if (this.cadastro_bovino.valid) {
      const dadosFormulario = this.cadastro_bovino.value;

      const bovinoAtualizado: Bovino = {
        brinco: dadosFormulario.brinco,
        brinco_pai: dadosFormulario.brinco_pai,
        brinco_mae: dadosFormulario.brinco_mae,
        dt_nasc: dadosFormulario.dt_nasc,
        dt_saida: dadosFormulario.dt_saida,
        status: dadosFormulario.status,
        sexo: dadosFormulario.sexo,
        pesos: this.data.pesos
      };
      this.dados.atualizeBovino(this.bovino.brinco, bovinoAtualizado).subscribe(() => {

        this.dialogRef.close();
      });
    }
  }

  cancelar(): void {
    if(this.cadastro_bovino.valueChanges)
      if(confirm("Deseja sair sem salvar as alterações?")){
        this.dialogRef.close();
      }
  };

}
