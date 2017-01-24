import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Enumerations } from '../../util/enum';
import { ModuleLoader } from '../../config/module-loader';

//main-level battery components
import { BatteryPage } from '../../pages/battery/battery';
import { BatteryDetailsPage } from '../../pages/battery/battery_details';

let battery_routes: Routes = [];
let module_loader = new ModuleLoader();

//battery sub-modules
battery_routes = battery_routes.concat(module_loader.loadModules(Enumerations.Modules.Battery));

//battery main-level routes - you can also use route guards here to determine what routes - 
//the user has access to
battery_routes.push({ path: '', component: BatteryPage });
battery_routes.push({ path: '/:id', component: BatteryDetailsPage });

@NgModule({
    imports: [RouterModule.forChild(battery_routes)],
    declarations: [ BatteryPage, BatteryDetailsPage ]
})

export class BatteryModule { }