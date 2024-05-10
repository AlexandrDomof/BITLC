import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'lnx-em-seite',
  templateUrl: './em-seite.component.html',
  styleUrls: ['./em-seite.component.css']
})
export class EmSeiteComponent {

  selectedAntwort =""
  fragenAnzahl=0
  fragenNummerArr : number[]=[];


  constructor(private router: Router, private mysv: MyserviceService){}

  createfragenNummerArr(j:number): number []{ //Array mit Fragennummer
    const arr : number[]=[];

    for (let i = 0; i < j; i++) {
      let num: number;

      do {
        num = Math.floor(Math.random() * 120); // Rnd Zahl generiert 0..119
      } while (arr.includes(num)); // prüft ob Element in Array gibt
      arr.push(num);
    }
    return arr
  }


  zuExamSinglechoice(){
    if (this.selectedAntwort!=="") {
      this.mysv.myIndxArr=this.createfragenNummerArr(parseInt(this.selectedAntwort))
      this.mysv.sv=parseInt(this.selectedAntwort)
      this.router.navigate(['em-singlemode']);//!!!!!! Routing
    }  
    
  }
  
}
