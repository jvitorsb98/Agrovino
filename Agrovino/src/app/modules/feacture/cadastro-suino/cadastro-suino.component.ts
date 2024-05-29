import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { SuinosService } from '../../shared/services/suinos.service';
import { DatabaseService } from '../../shared/services/database.service';
import { Suino } from '../../shared/model/suino';

@Component({
  selector: 'app-cadastro-suino',
  templateUrl: './cadastro-suino.component.html',
  styleUrl: './cadastro-suino.component.css',
})
export class CadastroSuinoComponent {
  cadastro_suino: FormGroup;
  lista_status: string[] = ['Ativo', 'Vendido', 'Morto'];

  constructor(private suinosService: SuinosService,
    private http:HttpClient,
    private dados:DatabaseService) {
    this.cadastro_suino = new FormGroup({
      brinco: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+$'),
      ]),
      brinco_pai: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+$'),
      ]),
      brinco_mae: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+$'),
      ]),
      dt_nasc: new FormControl('', [
        Validators.required,
        this.dataNascimentoValidator,
      ]),
      dt_saida: new FormControl('', [
        Validators.required,
        this.dataSaidaValidator,
      ]),
      status: new FormControl('', [Validators.required]),
      sexo: new FormControl('', [Validators.required]),
    });
  }

  // Data de nascimento Validator

  dataNascimentoValidator = () => {
    // Verifica se o formulário está inicializado
    if (!this.cadastro_suino) {
      return null;
    }

    const dataNascimento = this.cadastro_suino.get('dt_nasc')?.value;

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
    if (!this.cadastro_suino) {
      return null;
    }

    const dataSaida = this.cadastro_suino.get('dt_saida')?.value;
    const dataNascimento = this.cadastro_suino.get('dt_nasc')?.value;

    // Verifica se a data de nascimento foi preenchida
    if (!dataSaida || !dataNascimento) {
      return null;
    }

    const nascimento = new Date(dataNascimento);
    const saida = new Date(dataSaida);

    return nascimento > saida ? { invalido: true } : null;
  };

  onSubmit() {
    if (this.cadastro_suino.invalid)
      return;

    const dadosFormulario = this.cadastro_suino.value;
    const brinco = dadosFormulario.brinco;

    this.dados.getSuinoPorBrinco(brinco).subscribe((suino: Suino | null) => {
      if (suino) {
        // Suíno já cadastrado, exibe alerta
        alert('Já existe um suíno cadastrado com este brinco!');
      } else {
        // Suíno não cadastrado, prossegue com o cadastro
        const suino: Suino = {
          brinco: dadosFormulario.brinco,
          brinco_pai: dadosFormulario.brinco_pai,
          brinco_mae: dadosFormulario.brinco_mae,
          dt_nasc: dadosFormulario.dt_nasc,
          dt_saida: dadosFormulario.dt_saida,
          status: dadosFormulario.status,
          sexo: dadosFormulario.sexo,
          pesos: [] 
        };
      
        this.dados.adicionarSuino(suino).subscribe(() => {
          console.log('Suíno adicionado com sucesso!');
          this.cadastro_suino.reset(); // Limpa o formulário após adicionar o suíno com sucesso
        }, error => {
          console.error('Erro ao adicionar suíno:', error);
          // Você pode lidar com erros aqui, como exibir uma mensagem de erro para o usuário
        });
      }
    });
  }
  
}

