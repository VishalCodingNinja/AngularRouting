import { Injectable, Component } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{

  canActivate() {
    return confirm("do you want to go this page");
 }

  canActivateChild() {
   return confirm("do you want to go to child page");
  }
 

}