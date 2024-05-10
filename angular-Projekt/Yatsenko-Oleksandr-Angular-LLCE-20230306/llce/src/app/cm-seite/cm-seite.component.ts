import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service'; //Service
import { ScFrage } from '../shared/sc-frage'; //Interface




@Component({
  selector: 'lnx-cm-seite',
  templateUrl: './cm-seite.component.html',
  styleUrls: ['./cm-seite.component.css']
})
export class CmSeiteComponent {
  indx = 0
  fehler = 0
  richtig = 0
  uberspingt = 0
  selectedAntwort = ""
  scfragen: ScFrage[]
  arrValues: string[] = ["A", "B", "C", "D", "E"];
  selectedValues: string[] = [];
  antwortArr: number[] = [];

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

  onSubmit(): string {
    let tmpstr = ''

    const selectedItems = this.items.filter(item => item.selected)
    selectedItems.forEach(element => {
      tmpstr += element.label
    });

    return tmpstr
  }

  falscheAntwort() {
    this.fehler++

    window.alert('Fehler. Eine Frage zurück!')

    if (this.fehler >= 7) {
      window.alert('Zu viel Fehler. Geh nochmal lernen!')
      this.router.navigate(['lm-seite']);//!!!!!! Routing
    }
    else {
      this.onPreviosClick()
    }
  }

  richtigeAntwort() {
    //window.alert('Richtig. Nächste Frage.')
    this.richtig++

    if (this.indx < this.scfragen.length) {
      this.antwortArr[this.indx] = 1
      this.indx++
      this.selectedAntwort = ""
    }
    this.clearItems()
  }


  constructor(private myservice: MyserviceService,
    private router: Router) {
    this.scfragen = this.myservice.getAll()
  }

  getScFrageElement(array: ScFrage[], i: number): ScFrage {
    return array[i];
  }

  onNextClick() {
    if (this.indx < this.scfragen.length) {
      this.antwortArr[this.indx] = -1
      this.uberspingt++
      this.indx++
      this.selectedAntwort = ""
    }
    this.clearItems()
  }

  onPreviosClick() {
    if (this.indx > 0) {
      this.indx--
      this.selectedAntwort = ""
      if (this.antwortArr[this.indx] === -1) { this.uberspingt-- } else { this.richtig-- }
    }
    this.clearItems()
  }


  //-----------------------------------SC
  onAntwortPruefen(actuelleFrage: ScFrage) {

    if (actuelleFrage.qtyp === 'sc') {
      if (this.selectedAntwort !== "") {
        if (this.selectedAntwort !== actuelleFrage.qcorrect) {
          this.falscheAntwort()
        }

        else {
          this.richtigeAntwort()
        }
      }
    }
    //-----------------------------------MC

    if (actuelleFrage.qtyp === 'mc') {

      if (this.onSubmit() !== "") {
        if (this.onSubmit() !== this.getScFrageElement(this.scfragen, this.indx).qcorrect) {
          this.falscheAntwort()
        }

        else {
          this.richtigeAntwort()
        }
      }
    }
    //--------------------------------------FI
    if (actuelleFrage.qtyp === 'fi') {
      if (this.selectedAntwort !== "") {
        if (this.selectedAntwort !== actuelleFrage.qanswers[0].txt[0]) {
          this.falscheAntwort()
        }

        else {
          this.richtigeAntwort()
        }
        this.selectedAntwort = "";
      }
    }

  }


}
