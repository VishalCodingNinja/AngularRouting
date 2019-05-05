import { Component, OnInit, inject, Inject } from '@angular/core';
import { RouterModule,Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,  
    private route: ActivatedRoute ) {
       }
  title = 'RoutingAngularProject';

 ngOnInit() {
 }
  }
