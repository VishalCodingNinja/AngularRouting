import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-displaying-list',
  templateUrl: './displaying-list.component.html',
  styleUrls: ['./displaying-list.component.css']
})
export class DisplayingListComponent implements OnInit,OnDestroy {

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy()
  {
    alert("do you really wnat ")
  }



}
