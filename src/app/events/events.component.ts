import { Component, OnInit, OnDestroy, Output, EventEmitter, AfterContentInit } from '@angular/core';
import { EventsService } from '../EventsService';
import { Events } from '../Events';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit,OnDestroy {

  constructor(private readonly eventEvents:EventsService, public rout:ActivatedRoute) { }
  public Events:Events[];
  flag = 1;
  evFlag = 0;
 
  
  ngOnInit(  ) {
    
    this.getEvents();
    
    
  }

  getEvents(): void {
    this.eventEvents.getEvents().subscribe(Events => this.Events = Events);
    this.evFlag=1;
    console.log(this.Events)
  }


 ngOnDestroy()
 {
  
  // alert("destroyed")
  this.eventEvents.getEvents().subscribe(Events => this.Events = Events).unsubscribe();
  
 }

 notifyChild(){
   this.flag = 0;
 }
}
