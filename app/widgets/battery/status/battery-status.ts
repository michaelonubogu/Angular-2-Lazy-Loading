import { Component } from '@angular/core';

@Component({
  selector: 'battery-status',
  templateUrl: 'battery-status.html'
})

export class BatteryStatus {

    constructor(){

    }

    //Angular page-cycle events
    ngOnInt(){
    }

    //component-specific 
    getBatteryStatus(){
    }
}