import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';



@Component({
  selector: 'lnx-em-ergebnisse',
  templateUrl: './em-ergebnisse.component.html',
  styleUrls: ['./em-ergebnisse.component.css']
})
export class EmErgebnisseComponent {

  anzFragen=0
  fehler=0

  constructor(private mysv: MyserviceService,
    private router: Router)
  {
    this.anzFragen=this.mysv.af
    this.fehler=this.mysv.fl

  }

}
