import { Injectable } from '@angular/core';
import { Expediente } from './expediente';

@Injectable({
  providedIn: 'root'
})
export class MeteopeService {

  private expediente: Expediente = new Expediente();

  constructor() { }
}
