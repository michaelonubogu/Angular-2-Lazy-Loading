/* ----------------------------------------------------------------------
 * Name: Home page
 * Description: landing page for the 
 * --------------------------------------------------------------------*/
import {Type, Injectable, Input, Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'side-nav',
  template: 'sidenav.html',
  /*rotes are a list of routes which displayed in the nav - passed in from the parent*/
  inputs: ['routes']
})
export class SideNav {
  routes: string[];

  constructor() {
  }
}