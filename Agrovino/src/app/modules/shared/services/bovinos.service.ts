import { Injectable } from '@angular/core';
import { Bovino } from '../model/bovino';


@Injectable({
  providedIn: 'root'
})
export class BovinosService {
  bovinos: Bovino[] = [];
  constructor() { }

  getBovinos(): Bovino[] {
    return this.bovinos;
  }

  setBovinos(bovino: Bovino) {
    this.bovinos.push(bovino);
  }
}
