import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service'; //Service
import { ScFrage } from '../shared/sc-frage'; //Interface

@Component({
  selector: 'lnx-lm-seite',
  templateUrl: './lm-seite.component.html',
  styleUrls: ['./lm-seite.component.css']
})

export class LmSeiteComponent {

  scfragen: ScFrage[]
  constructor(private myservice: MyserviceService) {
    this.scfragen = this.myservice.getSC()
  }

}


