import { Injectable } from "@angular/core";
import { Events } from "./Events";
import { EventArray } from "./EventsArrayMOCKdata";
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class EventsService {
  
    constructor() { }
  
    getEvents(): Observable<Events[]> {
      
      return of(EventArray);
    }
  }
  