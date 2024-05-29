import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from '../../../shared/services/database.service';
import { Atividade } from '../../../shared/model/atividade';

@Component({
  selector: 'app-cadastrar-atividade',
  templateUrl: './cadastrar-atividade.component.html',
  styleUrl: './cadastrar-atividade.component.css'
})
export class CadastrarAtividadeComponent {

  formularioAtividade : FormGroup;

  constructor(private database: DatabaseService) {
    this.formularioAtividade = new FormGroup({
      'descricao': new FormControl(null, [
          Validators.required
      ])
    })
  }

  onSubmit(){
    if(this.formularioAtividade.valid){
      let resposta = this.formularioAtividade.value;
      let atividade: Atividade = {
        id: this.geraId(),
        descricao: resposta.descricao
      }

      this.database.createAtividade(atividade)
      console.log(this.database.getAtividades());

      this.formularioAtividade.reset();
      alert("Atividade cadastrada com sucesso!")
    }
    else{
      alert("Formulário Inválido!")
    }
  }

  geraId(): string{
    let id = '';
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const tamanho = 5;

    for (let i = 0; i < tamanho; i++) {
        id += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    return id;
  }
}
