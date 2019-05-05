import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Events } from 'src/app/Events';
import { EventsService } from 'src/app/EventsService';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit,OnDestroy {
   id:number;
   flag = 1;
   
   EventN:Events[] ;
   

   eventId:number;
    event:string;
    location:string;
    date:string;

  getDetails(id){
    for(let ev of this.EventN)
    {
      if(id == ev.eventId)
      {
        this.eventId=ev.eventId;
        this.event =ev.event;
        this.location =ev.location;
        this.date = ev.date;
      }
    }
    console.log(this.EventN)
  }
   
  constructor(private readonly activatedRoute:ActivatedRoute,private readonly EventsServices:EventsService) { }

  ngOnInit() {
   
    
    this.EventsServices.getEvents().subscribe(EventN=>this.EventN=EventN);
    console.log(this.EventN);
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{this.id=parseInt(params.get('eventId')); this.getDetails(this.id);} );
    
   
      

  }
  ngOnDestroy()
  {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>this.id=parseInt(params.get('eventId')) ).unsubscribe();
  }

}
