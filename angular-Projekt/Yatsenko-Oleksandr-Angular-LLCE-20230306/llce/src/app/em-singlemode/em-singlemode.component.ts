import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ScFrage } from '../shared/sc-frage'; //Interface
import { Router } from '@angular/router';

@Component({
  selector: 'lnx-em-singlemode',
  templateUrl: './em-singlemode.component.html',
  styleUrls: ['./em-singlemode.component.css']
})
export class EmSinglemodeComponent {
  fragenNummerArr: number[] = [];
  anzFragen = 0
  indx = 0
  fehler = 0
  richtig = 0
  scfragen: ScFrage[]
  selectedAntwort = ""
  fehlerProzent = 0

  items = [
    { label: 'A', selected: false, value: 'A' },
    { label: 'B', selected: false, value: 'B' },
    { label: 'C', selected: false, value: 'C' },
    { label: 'D', selected: false, value: 'D' },
    { label: 'E', selected: false, value: 'E' }
  ];

  clearItems() {
    this.items.forEach(element => {
      element.selected = false
    });
  }

  einFehler() {
    this.fehler++
    this.fehlerProzent = this.fehler / this.anzFragen * 100

    if (this.fehlerProzent >= 20) {
      window.alert('Zu viel Fehler (20% oder mehr). Geh nochmal lernen!')
      this.router.navigate(['lm-seite']);//!!!!!! Routing
    }
  }



  nextQuestion() {
    this.indx++
    if (this.indx === this.anzFragen) { this.zuErgebnisse() }
  }

  onSubmit(): string {
    let tmpstr = ''

    const selectedItems = this.items.filter(item => item.selected)
    selectedItems.forEach(element => {
      tmpstr += element.label
    });

    return tmpstr
  }

  constructor(private mysv: MyserviceService,
    private router: Router) {
    this.anzFragen = this.mysv.sv
    this.scfragen = this.mysv.getAll()
    this.fragenNummerArr = this.mysv.myIndxArr

    this.mysv.af = this.anzFragen
    this.mysv.fl = this.fehler
  }

  getScFrageElement(array: ScFrage[], i: number): ScFrage {
    return array[i];
  }


  //-----------------------------------SC
  onAntwortPruefen(actuelleFrage: ScFrage) {

    if (actuelleFrage.qtyp === 'sc') {
      if (this.selectedAntwort !== "") {
        if (this.selectedAntwort !== actuelleFrage.qcorrect) {
          this.einFehler()
        }
        else {
          this.richtig++
        }
        this.nextQuestion()
      }
    }
    //-----------------------------------MC

    if (actuelleFrage.qtyp === 'mc') {

      if (this.onSubmit() !== "") {
        if (this.onSubmit() !== this.scfragen[this.fragenNummerArr[this.indx]].qcorrect) {
          this.einFehler()
        }

        else {
          this.richtig++
        }
        this.clearItems()
        this.nextQuestion()
      }
    }
    //--------------------------------------FI
    if (actuelleFrage.qtyp === 'fi') {
      if (this.selectedAntwort !== "") {
        if (this.selectedAntwort !== actuelleFrage.qanswers[0].txt[0]) {
          this.einFehler()
        }

        else {
          this.richtig++
        }
        this.nextQuestion()
      }
    }

    this.selectedAntwort = "";


  }


  zuErgebnisse() {
    this.mysv.sv = this.anzFragen
    this.mysv.fl = this.fehler
    this.router.navigate(['em-ergebnisse']);//!!!!!! Routing
  }

}
