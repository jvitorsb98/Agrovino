import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, tap, throwError, forkJoin, switchMap , mergeMap} from 'rxjs';
import { Bovino } from '../model/bovino';
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

  getBovinos(): Observable<Bovino[]> {
    return this.http
      .get<Bovino[]>(`${this.endpoint}/bovinos.json`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  adicionarBovino(bovino: Bovino): Observable<void> {

    const url = `${this.endpoint}/bovinos/${bovino.brinco}.json`;
    return this.http.put<void>(url, bovino, this.httpOptions)
      .pipe(
        tap(() => console.log(`Suíno adicionado com brinco ${bovino.brinco}`)),
        catchError(this.handleError)
      );
  }

  getBovinoPorBrinco(brinco: string): Observable<Bovino | null> {
    const url = `${this.endpoint}/bovinos/${brinco}.json`;

    return this.http.get<Bovino>(url)
      .pipe(
        catchError(this.handleError)
      );
  }


  atualizeBovino(brinco: string, bovino: Bovino): Observable<void> {
    const url = `${this.endpoint}/bovinos/${brinco}.json`;
    return this.http.put<void>(url, bovino, this.httpOptions)
      .pipe(
        tap(() => console.log(`Suíno com brinco ${brinco} atualizado com sucesso`)),
        catchError(this.handleError)
      );
  }

  deletaBovino(brinco: string): Observable<void> {
    const url = `${this.endpoint}/bovinos/${brinco}.json`;
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

  getHistoricoBovino(id: string): Observable<any[]> {
    return this.http.get<any>(`${this.endpoint}/bovinos/${id}.json`).pipe(
        catchError(this.handleError),
        map((bovino: any) => {
            if (!bovino || !bovino.pesos) {
                return [];
            }
            // Obter os pesos do suíno
            const pesos = Object.values(bovino.pesos);

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
            let bovinos: any = {};
            for (let i = 0; i < sessao.atividades.length; i++) {
              let data = {
                ...bovinos,
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

  getBovinosSessao(idSessao: string): Observable<string[]> {
    return this.http
      .get<string[]>(`${this.endpoint}/sessoes/${idSessao}/bovinos.json`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getStatusBovino(
    idSessao: string,
    idAtividade: string,
    idBovino: string
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
              return atividade[idBovino] as boolean;
            }
          }
          return false;
        })
      );
  }

  mudarStatusAtividade(
    idSessao: string,
    idAtividade: string,
    idBovino: string,
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
              atividade[idBovino] = status;
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
