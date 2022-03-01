import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Entry } from '../model/entry';
import { EntryService } from '../services/entry.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-inputpage',
  templateUrl: './inputpage.component.html',
  styleUrls: ['./inputpage.component.css']
})
export class InputpageComponent implements OnInit {

  public month: number = new Date().getMonth();
  public fullYear: number = new Date().getFullYear();
  public day : number = new Date().getUTCDate();
  public dateValue: Object = new Date(this.fullYear, this.month , this.day);
  public minDate: Date = new Date(this.fullYear-100, this.month , this.day);
  public maxDate: Date = new Date(this.fullYear, this.month, this.day);
  private formatter:DatePipe = new DatePipe('en-US');
  private entries: Array<Entry> = []
  private balance:number=0;
  entry:Entry = new Entry(0,new Date(),'',0,0,false);

  constructor(private es:EntryService,private rs:RouterService) { }

  ngOnInit(): void {
    this.es.getEntries().subscribe(
      data=>{
        this.entries = data;
        this.entries = this.entries.sort((a,b)=>(new Date(a.dateTime).getTime()-new Date(b.dateTime).getTime()));
        this.balance = this.entries[this.entries.length-1].balance
        console.log("bal "+this.balance);
      }
    )
  }

  onChange(event:any){
    this.dateValue = event.value;
    console.log('args '+ this.formatter.transform(event.value,'yyyy-MM-dd'));
  }

  onInBtn(){
    
    this.entry.amount = parseInt(''+this.entry.amount)
    this.entry.dateTime = new Date(this.formatter.transform(this.dateValue as string,'yyyy-MM-dd') as string)
    if(this.entry.amount==0) {
      alert('amount required')
      return
    }
    if(this.entry.dateTime.toDateString().length==0){
      alert('date required')
      return
    }
    this.entry.type = true
    this.entry.balance = this.balance+this.entry.amount
    console.log(this.entry)
    this.es.addEntry(this.entry).subscribe(
      data=>{
        console.log(data)
        this.rs.routeToHome()
      },
      error=>{
        console.log(error );
      }
    )
  }

  onOutBtn(){
    this.entry.amount = parseInt(''+this.entry.amount)
    this.entry.dateTime = new Date(this.formatter.transform(this.dateValue as string,'yyyy-MM-dd') as string)
    if(this.entry.amount==0) {
      alert('amount required')
      return
    }
    if(this.entry.dateTime.toDateString().length==0){
      alert('date required')
      return
    }
    this.entry.type = false
    this.entry.balance = this.balance-this.entry.amount
    console.log(this.entry)
    this.es.addEntry(this.entry).subscribe(
      data=>{
        console.log(data)
        this.rs.routeToHome()
      },
      error=>{
        console.log(error );
      }
    )
  }

}
