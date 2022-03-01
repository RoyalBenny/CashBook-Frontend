import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {Entry} from 'src/app/model/entry';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  url:string = "http://localhost:24551/api/entry"
  entries: Array<Entry>;
  subject:BehaviorSubject<Array<Entry>>;
  constructor(private httpClient:HttpClient, private as :AuthService) {
    this.entries=[]
    this.subject = new BehaviorSubject(this.entries)
   }

   getEntries():BehaviorSubject<Array<Entry>>{
     this.httpClient.get<Array<Entry>>(this.url,{
       headers:{
         'Authorization':'Bearer '+localStorage.getItem('token')
       }
     }).subscribe(
       (data)=>{
         this.entries=[]
         this.entries = data,
         this.subject.next(this.entries)
       },
       (err)=>{
         console.log(err)
       }
     );
     return this.subject;
   }
   getEntriesByMonth(month:number,year:number):BehaviorSubject<Array<Entry>>{
    this.httpClient.post<Array<Entry>>(this.url+'/'+month+'/'+year,'',
    {
      headers:{
        'Authorization':'Bearer '+localStorage.getItem('token')
      }
    }).subscribe(
      (data)=>{
        this.entries = data,
        this.subject.next(this.entries)
      },
      (err)=>{
        console.log(err)
      }
    );
    return this.subject;
  }

  getEntriesByYear(year:number):BehaviorSubject<Array<Entry>>{
    this.httpClient.post<Array<Entry>>(this.url+'/'+year,'',{
      headers:{
        'Authorization':'Bearer '+localStorage.getItem('token')
      }
    }).subscribe(
      (data)=>{
        this.entries = data,
        this.subject.next(this.entries)
      },
      (err)=>{
        console.log(err)
      }
    );
    return this.subject;
  }



   addEntry(entry:Entry):Observable<Entry>{
     return this.httpClient.post<Entry>(this.url,entry,
      {
        headers:{
          'Authorization':'Bearer '+localStorage.getItem('token')
        }
      }
      )
   }

}
