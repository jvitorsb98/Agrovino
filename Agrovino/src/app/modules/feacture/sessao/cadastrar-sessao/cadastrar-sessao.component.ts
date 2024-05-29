
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Atividade } from '../../../shared/model/atividade';
import { Bovino } from '../../../shared/model/bovino';
import { DatabaseService } from '../../../shared/services/database.service';
import { Sessao } from '../../../shared/model/sessao';



@Component({
  selector: 'app-cadastrar-sessao',
  templateUrl: './cadastrar-sessao.component.html',
  styleUrl: './cadastrar-sessao.component.css'
})
export class CadastrarSessaoComponent {
  listaAtividades: Atividade[] = [];
  atividadesSelecionadas: string[] = [];
  listaBovinos: Bovino[] = [];
  bovinosFiltrados: Bovino[] = [];
  formCadastro: FormGroup = new FormGroup({});
  valorFiltro: string = '';
  valorPesquisa: any = '';
  minDate = new Date();

  constructor(
    private database: DatabaseService,
    private formBuilder: FormBuilder,
    // private dataPipe: DatePipe
  ) {
    this.formCadastro = this.formBuilder.group({
      descricao: ['', Validators.required],
      data: ['', Validators.required],
      atividades: this.formBuilder.array([], {
        validators: this.minimoSelecionado(),
      }),
    });
  }

  ngOnInit() {
    this.database.getAtividades().subscribe((atividades) => {
      for (const key in atividades) {
        if (atividades.hasOwnProperty(key)) {
          this.listaAtividades.push({ ...atividades[key], id: key });
        }
      }
    });

    this.database.getBovinos().subscribe((bovinos) => {
      this.listaBovinos = [];

      for (const key in bovinos) {
        console.log(key)
        if (bovinos.hasOwnProperty(key)) {
          if ('status' in bovinos[key] && bovinos[key].status === 'Ativo')
            this.listaBovinos.push({ ...bovinos[key], brinco: key });
        }
      }

      this.bovinosFiltrados = this.listaBovinos;

      this.listaBovinos.forEach((bovino) => {
        this.formCadastro.addControl(bovino.brinco!, this.formBuilder.control(false));
      });
    });
  }

  checkAtividade(marcado: boolean) {
    this.bovinosFiltrados.forEach((bovino) => {
      let id = bovino.brinco!;
      this.formCadastro.get(id)?.setValue(marcado);
    });
  }

  minimoSelecionado(minimo: number = 1): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value.length < minimo) {
        return { selecaoInvalida: { value: control.value } };
      }
      return null;
    };
  }

  cadastrarSessao(): void {
    if (this.formCadastro.invalid) {
      if (this.formCadastro.get('atividades')?.hasError('selecaoInvalida')) {
        alert('Selecione ao menos uma atividade');
      }
    } else {
      let idBovinos: string[] = [];
      let bovinoSelecionado = false;
      for (const key in this.formCadastro.value) {
        if (key !== 'descricao' && key !== 'data' && key !== 'atividades') {
          bovinoSelecionado = bovinoSelecionado || this.formCadastro.value[key];
          if (this.formCadastro.value[key]) {
            idBovinos.push(key);
          }
        }
      }
      if (!bovinoSelecionado) {
        alert('Selecione ao menos um suíno');
        return;
      }

      let data = this.formCadastro.value.data;
      
      let sessao: Sessao = {
        id: this.gerarStringAleatoria(),
        descricao: this.formCadastro.value.descricao,
        data: data,
        status: false,
        bovinos: idBovinos,
        atividades: this.formCadastro.value.atividades
      };

      this.database.addSessao(
        sessao,
      );
      alert("Sessão cadastrada com sucesso!")
      this.formCadastro.reset();
    }
  }

  get atividades(): FormArray {
    return this.formCadastro.get('atividades') as FormArray;
  }

  gerarStringAleatoria(): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let resultado = '';
    for (let i = 0; i < 10; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      resultado += caracteres.charAt(indice);
    }
    return resultado;
  }

  selectAtividade(idAtividade: string): void {
    const atividadesArray = this.atividades;
    if (atividadesArray.value.includes(idAtividade)) {
      const index = atividadesArray.value.indexOf(idAtividade);
      atividadesArray.removeAt(index);
    } else {
      atividadesArray.push(this.formBuilder.control(idAtividade));
    }
  }

}
