import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service'; //Service
import { ScFrage } from '../shared/sc-frage'; //Interface



@Component({
  selector: 'lnx-lm-listmode',
  templateUrl: './lm-listmode.component.html',
  styleUrls: ['./lm-listmode.component.css']
})
export class LmListmodeComponent {
  isChecked = false;
  antwortenZeigen: boolean[] = []
  showAnswer = false
  nrAnswerShow = -1
  indx = 0

  scfragen: ScFrage[]


  switchAnswer(qid: number) {
    if (this.nrAnswerShow != qid) {
      this.nrAnswerShow = qid;
      this.showAnswer = true
    } else {
      this.showAnswer = !this.showAnswer
    }
  }

  getScFrageElement(array: ScFrage[], i: number): ScFrage {
    return array[i];
  }


  constructor(private myservice: MyserviceService) {
    this.scfragen = this.myservice.getAll() // für alle Fragen-Arten
  }

}
