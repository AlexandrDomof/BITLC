import { Injectable } from '@angular/core';
import Sc_Fragen from '../assets/LPI-2019-1-101d-QA-sc.json';
import All_Fragen from '../assets/LPI-2019-1-101d-QA-all.json';
import { ScFrage } from './shared/sc-frage';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  sv = 0
  af = 0
  fl = 0
  myIndxArr: number[] = []

  // constructor() { }

  fragen: ScFrage[] = Sc_Fragen;
  allfragen: ScFrage[] = All_Fragen;
  getSC() { return this.fragen }
  getAll() { return this.allfragen }
}


