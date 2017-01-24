import { NgModule }      from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { ModuleLoader } from '../app/config/module-loader';
import { AppComponent }  from './app.component';

const module_loader = new ModuleLoader();
let app_routes: Routes = [];

app_routes = app_routes.concat(module_loader.loadModules());

//declare app dependencies
@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot(app_routes),
    MaterialModule.forRoot() 
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
