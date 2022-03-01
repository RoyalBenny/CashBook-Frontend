import { Component, OnInit } from '@angular/core';
import { Entry } from '../model/entry';
import { EntryService } from '../services/entry.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  entries:Array<Entry> = []
  constructor(private es:EntryService) {
    this.es.getEntries().subscribe(
      (data)=>{
        this.entries = data
        this.entries.sort((a,b)=>(new Date(b.dateTime).getTime()-new Date(a.dateTime).getTime()));
      }
    )
   }

  ngOnInit(): void {
  }

}
