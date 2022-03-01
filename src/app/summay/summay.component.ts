import { Component, OnInit } from '@angular/core';
import { Entry } from '../model/entry';
import { EntryService } from '../services/entry.service';

@Component({
  selector: 'app-summay',
  templateUrl: './summay.component.html',
  styleUrls: ['./summay.component.css']
})
export class SummayComponent implements OnInit {

  entries:Array<Entry> =[]
  cashIn = 0;
  cashOut=0;
  netBalance = 0;
  constructor(private es:EntryService) {
    this.es.getEntries().subscribe(
      data=>{
        this.cashIn=0;
        this.cashOut=0;
        this.netBalance=0;
        this.entries = data;
        this.entries.forEach(i=>{
          if(i.type){
            this.cashIn+=i.amount;
            this.netBalance+=i.amount;
          }else{
            this.cashOut+=i.amount;
            this.netBalance-=i.amount;
          }
        })
      }
    )

   }

  ngOnInit(): void {
  }

}
