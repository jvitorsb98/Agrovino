import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, tap, throwError, forkJoin, switchMap , mergeMap} from 'rxjs';
import { Suino } from '../model/suino';
import { Atividade } from '../model/atividade';
import { Sessao } from '../model/sessao';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private endpoint = "https://agrovino-c9ba4-default-rtdb.firebaseio.com";

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getSuinos(): Observable<Suino[]> {
    return this.http
      .get<Suino[]>(`${this.endpoint}/suinos.json`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  adicionarSuino(suino: Suino): Observable<void> {

    const url = `${this.endpoint}/suinos/${suino.brinco}.json`;
    return this.http.put<void>(url, suino, this.httpOptions)
      .pipe(
        tap(() => console.log(`Suíno adicionado com brinco ${suino.brinco}`)),
        catchError(this.handleError)
      );
  }

  getSuinoPorBrinco(brinco: string): Observable<Suino | null> {
    const url = `${this.endpoint}/suinos/${brinco}.json`;

    return this.http.get<Suino>(url)
      .pipe(
        catchError(this.handleError)
      );
  }


  atualizeSuino(brinco: string, suino: Suino): Observable<void> {
    const url = `${this.endpoint}/suinos/${brinco}.json`;
    return this.http.put<void>(url, suino, this.httpOptions)
      .pipe(
        tap(() => console.log(`Suíno com brinco ${brinco} atualizado com sucesso`)),
        catchError(this.handleError)
      );
  }

  deletaSuino(brinco: string): Observable<void> {
    const url = `${this.endpoint}/suinos/${brinco}.json`;
    return this.http.delete<void>(url, this.httpOptions)
      .pipe(
        tap(() => console.log(`Suíno com brinco ${brinco} excluído com sucesso`)),
        catchError(this.handleError)
      );
  }

  createAtividade(atividade: Atividade) {
    this.http
      .put(this.endpoint + `/atividades/${atividade.id}.json`, atividade)
      .subscribe();
  }

  deleteAtividade(id: string) {
    this.http
      .delete(this.endpoint + `/atividades/${id}.json`)
      .subscribe();
  }

  getAtividades(): Observable<Atividade[]> {
    return this.http
      .get<Atividade[]>(this.endpoint + '/atividades.json')
      .pipe(retry(2), catchError(this.handleError));
  }

  getAtividade(id: string): Observable<Atividade> {
    return this.http
      .get<Atividade>(this.endpoint + `/atividades/${id}.json`)
      .pipe(retry(2), catchError(this.handleError));
  }

  updateAtividade(id: string, atividade: Atividade) {
    this.http
      .put<Atividade>(
        this.endpoint + `/atividades/${id}.json`,
        atividade,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError))
      .subscribe();
  }

  getAtividadeByDesc(nome: string): Observable<Atividade> {
    return this.http
      .get<Atividade>(
        this.endpoint + `/atividades.json?orderBy="descricao"&equalTo="${nome}"`
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  getHistoricoSuino(id: string): Observable<any[]> {
    return this.http.get<any>(`${this.endpoint}/suinos/${id}.json`).pipe(
        catchError(this.handleError),
        map((suino: any) => {
            if (!suino || !suino.pesos) {
                return [];
            }
            // Obter os pesos do suíno
            const pesos = Object.values(suino.pesos);

            // Mapear os pesos para o formato desejado
            const historico = pesos.map((peso: any) => ({
                data: new Date(peso.dt_pesagem),
                descricao: 'Pesagem',
                detalhes: `${peso.peso} kg`
            }));

            return historico;
        })
    );
}


  addSessao(
    sessao: Sessao,
  ) {
    if (sessao.atividades.length !== 0) {
      this.http
        .put(this.endpoint + `/sessoes/${sessao.id}/.json`, sessao)
        .subscribe((response) => {
          if (response && 'name' in response) {
            let suinos: any = {};
            for (let i = 0; i < sessao.atividades.length; i++) {
              let data = {
                ...suinos,
                id: sessao.atividades[i],
              };
              this.http
                .put(
                  this.endpoint + `/sessoes/${sessao.id}/atividades/.json`,
                  data
                ).subscribe();
            }
          }
        });
    }
  }

  deleteSessao(id: string) {
    this.http
      .delete(this.endpoint + `/sessoes/${id}.json`)
      .subscribe();
  }

  getSessoes(): Observable<Sessao[]> {
    return this.http
      .get<Sessao[]>(this.endpoint + '/sessoes.json')
      .pipe(retry(2), catchError(this.handleError));
  }

  getSessao(id: string): Observable<Sessao> {
    return this.http
      .get<Sessao>(this.endpoint + `/sessoes/${id}.json`)
      .pipe(retry(2), catchError(this.handleError));
  }


  buscarAtividadesDaSessao(idSessao: string): Observable<Atividade[]> {
    return this.getAtividadesSessao(idSessao).pipe(
      switchMap((ids: string[]) => {
        const observables: Observable<Atividade>[] = [];
        ids.forEach(id => {
          observables.push(this.getAtividade(id));
        });
        return forkJoin(observables);
      })
    );
  }

  getAtividadesSessao(idSessao: string): Observable<string[]> {
    return this.http
      .get<string[]>(`${this.endpoint}/sessoes/${idSessao}/atividades.json`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getSuinosSessao(idSessao: string): Observable<string[]> {
    return this.http
      .get<string[]>(`${this.endpoint}/sessoes/${idSessao}/suinos.json`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getStatusSuino(
    idSessao: string,
    idAtividade: string,
    idSuino: string
  ): Observable<boolean> {
    return this.http
      .get(this.endpoint + `/sessoes/${idSessao}/atividades/.json`)
      .pipe(
        retry(2),
        catchError(this.handleError),
        map((response: any) => {
          const keys = Object.keys(response);
          for (const key of keys) {
            const atividade = response[key];
            if (
              atividade.hasOwnProperty('id') &&
              atividade['id'] === idAtividade
            ) {
              return atividade[idSuino] as boolean;
            }
          }
          return false;
        })
      );
  }

  mudarStatusAtividade(
    idSessao: string,
    idAtividade: string,
    idSuino: string,
    status: boolean
  ) {
    this.http
      .get(this.endpoint + `/sessoes/${idSessao}/atividades/.json`)
      .pipe(
        retry(2),
        catchError(this.handleError),
        map((response: any) => {
          console.log(response);
          const keys = Object.keys(response);
          for (const key of keys) {
            const atividade = response[key];
            if (
              atividade.hasOwnProperty('id') &&
              atividade['id'] === idAtividade
            ) {
              atividade[idSuino] = status;
              console.log(atividade);
              this.http
                .put(
                  this.endpoint + `/sessoes/${idSessao}/atividades/${key}.json`,
                  atividade
                )
                .subscribe();
            }
          }
        })
      )
      .subscribe();
  }

  mudarStatusSessao(idSessao: string, status: boolean) {
    this.http
      .get(this.endpoint + `/sessoes/${idSessao}.json`)
      .pipe(
        retry(2),
        catchError(this.handleError),
        map((response: any) => {
          response.status = status;
          this.http
            .put(this.endpoint + `/sessoes/${idSessao}.json`, response)
            .subscribe();
        })
      )
      .subscribe();
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }

    return throwError(() => new Error(errorMessage));
  }

}
