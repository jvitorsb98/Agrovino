import { Injectable } from '@angular/core';
import { Bovino } from '../model/bovino';


@Injectable({
  providedIn: 'root'
})
export class BovinosService {
  bovinos: Bovino[] = [];
  constructor() { }

  getSuinos(): Bovino[] {
    return this.bovinos;
  }

  setSuinos(bovino: Bovino) {
    this.bovinos.push(bovino);
  }
}
