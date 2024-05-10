import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service'; //Service
import { ScFrage } from '../shared/sc-frage'; //Interface

@Component({
  selector: 'lnx-lm-singlemode',
  templateUrl: './lm-singlemode.component.html',
  styleUrls: ['./lm-singlemode.component.css']
})
export class LmSinglemodeComponent {

  indx = 0
  isChecked = false
  detailFlag = false
  isfi = false

  scfragen: ScFrage[]
  constructor(private myservice: MyserviceService) {
    this.scfragen = this.myservice.getAll()
    console.log(this.scfragen)
  }

  getScFrageElement(array: ScFrage[], i: number): ScFrage {
    return array[i];
  }

  onNextClick() {
    if (this.indx < this.scfragen.length) {
      this.indx++;
      this.isChecked = false
      this.detailFlag = false
    }
  }

  onPreviosClick() {
    if (this.indx > 0) {
      this.indx--
      this.isChecked = false
      this.detailFlag = false
    }
  }

  isFi() {
    if (this.getScFrageElement(this.scfragen, this.indx).qtyp === 'fi') { this.isfi = true }
    else { this.isfi = false }
  }


  onDetailClick() {
    this.isChecked = false
    this.detailFlag = true
    this.isFi()
  }

}

