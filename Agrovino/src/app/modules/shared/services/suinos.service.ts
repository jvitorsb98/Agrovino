import { Injectable } from '@angular/core';
import { Suino } from '../model/suino';


@Injectable({
  providedIn: 'root'
})
export class SuinosService {
  suinos: Suino[] = [];
  constructor() { }

  getSuinos(): Suino[] {
    return this.suinos;
  }

  setSuinos(suino: Suino) {
    this.suinos.push(suino);
  }
}
