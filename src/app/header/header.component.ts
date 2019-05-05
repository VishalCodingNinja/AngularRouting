import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import  * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit() {
    $("#sideBar").hide();
    $("#OlID").hide();
    $("#fundamentalChild").hide();
    $("#fundamentalChildChild").hide();
 }
  
  ngAfterViewInit()
  {
    $("#toggleIcon").click(function(){
      $("#sideBar").toggle(200)}
    )
    $("#TutIDForToggle").click(function(){
      $("#OlID").toggle(2000);
    })
    $("#fundamentalID").click(function(){
      $("#fundamentalChild").toggle(200)}
    )
    $("#ArchitectureID").click(function(){
      $("#fundamentalChildChild").toggle(200)}
    )

  }
  //ngafterViewChecked :i dont know much but it seams like it is bubbling till the top


}
