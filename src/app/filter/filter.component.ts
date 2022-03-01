import { Component, OnInit } from '@angular/core';
import { EntryService } from '../services/entry.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private es:EntryService) { }

  ngOnInit(): void {
  }

  onFilter(option:number){
    if(option==1){
    this.es.getEntries()
    }else if(option==2){
      this.es.getEntriesByMonth(new Date().getMonth()+1,new Date().getFullYear())

    }else{
      this.es.getEntriesByYear(new Date().getFullYear())
    }
  }
}
