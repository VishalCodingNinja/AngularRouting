import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


import { ArchitectureComponent } from './architecture.component';

@Injectable(
  {
    providedIn:'root'
  }
)
export class CanDeactivateGuard implements CanDeactivate<ArchitectureComponent> {

  canDeactivate(
    component: ArchitectureComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | Promise<boolean> | boolean {

    return confirm('do youn want to leave page?');
    
  }

}