import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Enumerations } from '../../util/enum';

//landing components
import { DashboardPage } from '../../pages/dashboard/dashboard';

/* build landing page routes */
const dashboard_routes: Routes = [
    { path: '', component: DashboardPage }
];


@NgModule({
    imports: [RouterModule.forChild(dashboard_routes)],
    declarations: [ DashboardPage ]
})
export default class DashboardsModule { }