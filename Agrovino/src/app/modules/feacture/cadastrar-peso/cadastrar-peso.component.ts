import { Component } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { DatabaseService } from '../../shared/services/database.service';
import { Suino } from '../../shared/model/suino';



@Component({
  selector: 'app-cadastrar-peso',
  templateUrl: './cadastrar-peso.component.html',
  styleUrl: './cadastrar-peso.component.css',
})
export class CadastrarPesoComponent {
  selectedItems: Suino[] = [];
  dropdownSettings: IDropdownSettings = {};
  suinos: Suino[] = [];
  formCadastro: FormGroup;
  campoBloqueado: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  campoBloqueado$: boolean = true;


  dataPesagemValidator = () => {
    // Verifica se o formulário está inicializado
    if (!this.formCadastro) {
      return null;
    }

    const dataPesagem = this.formCadastro.get('dt_pesagem')?.value;
    const dataNascimento = this.selectedItems[0].dt_nasc;
    const dataSaida = this.selectedItems[0].dt_saida;

    // Verifica se a data de pesagem foi preenchida
    if (!dataPesagem) {
      return null;
    }

    const pesagem = new Date(dataPesagem);
    const nascimento = new Date(dataNascimento);
    const saida = new Date(dataSaida);

    if (pesagem >= nascimento && pesagem <= saida){
      return null;
    }
    return { invalido: true };
  };

  constructor(private dados:DatabaseService) {
    this.formCadastro = new FormGroup({
      brinco: new FormControl('', [Validators.required]),
      dt_pesagem: new FormControl(
        { value: '', disabled: this.campoBloqueado$},
        [Validators.required, this.dataPesagemValidator]
      ),
      peso: new FormControl({ value: '', disabled: this.campoBloqueado$}, [
        Validators.required,
        Validators.pattern('[0-9]+$'),
      ]),
    });

    this.dados.getSuinos().subscribe((suinos: Suino[]) => {
      this.suinos = Object.values(suinos); // Transforma o objeto em um array

    });
  }
  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'brinco',
      textField: 'brinco',
      limitSelection: 1,
      noFilteredDataAvailablePlaceholderText: 'Nenhum suíno encontrado!',
      itemsShowLimit: 4,
      allowSearchFilter: true,
    };
    this.campoBloqueado.subscribe(valor => {
      if(valor){
        this.formCadastro.get('dt_pesagem')?.disable();
        this.formCadastro.get('peso')?.disable();
      }else{
        this.formCadastro.get('dt_pesagem')?.enable();
        this.formCadastro.get('peso')?.enable();
      }
    });
  }
  onItemSelect(item: any) {
    this.suinos.forEach((suino) => {
      if (suino.brinco === item.brinco) {
        this.formCadastro.get('brinco')?.setValue(item.brinco);
        this.selectedItems.push(suino);
        this.campoBloqueado.next(false);
      }
    });
  }
  onDeselect(item: any) {
    this.campoBloqueado.next(true);
    this.selectedItems.pop();
  }
  
  
  onSubmit() {
    if(this.formCadastro.valid){
      const brincoSelecionado = this.formCadastro.get('brinco')?.value;
      const peso = this.formCadastro.get('peso')?.value;
      const dt_pesagem = this.formCadastro.get('dt_pesagem')?.value;
  
      const suinoAtualizado = this.suinos.find(suino => suino.brinco === brincoSelecionado);
  
      if (suinoAtualizado) {
        // Verifica se a propriedade 'pesos' está definida
        if (!suinoAtualizado.pesos) {
          suinoAtualizado.pesos = [];
        }
  
        // Verifica se já existe um peso cadastrado na mesma data
        const pesoExistente = suinoAtualizado.pesos.find((item: any) => item.dt_pesagem === dt_pesagem);
        if (pesoExistente) {
          alert('Já existe um peso cadastrado para esta data!');
          return;
        }
  
        suinoAtualizado.pesos.push({ peso, dt_pesagem });
        this.dados.atualizeSuino(suinoAtualizado.brinco!, suinoAtualizado).subscribe(() => {
          this.formCadastro.reset();
          alert('Pesagem cadastrada!');
        });
      }
    }
  }
  


  
}