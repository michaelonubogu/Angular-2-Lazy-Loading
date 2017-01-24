import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleLoader } from '../../config/module-loader';
import { Enumerations } from '../../util/enum';

const module_loader = new ModuleLoader();
const util_routes = module_loader.loadModules(Enumerations.Modules.Util);

@NgModule({
    imports: [RouterModule.forChild(util_routes)],
    declarations: []
})
export class UtilModule { }