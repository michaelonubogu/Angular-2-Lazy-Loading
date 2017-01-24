import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Enumerations } from '../../util/enum';


//login components
import { LoginWidget } from '../../widgets/default/login/login';

/* build landing page routes */
const login_routes: Routes = [
    { path: 'login', component: LoginWidget }
];

@NgModule({
    imports: [RouterModule.forChild(login_routes)],
    declarations: [ LoginWidget ]
})
export class LoginModule { }