/* --------------------------------------------------------------------------------
 * name:        Dynamic Load Modules based on user permissions
 * description: dynamically loads modules based on conditions
 * 
 * ------------------------------------------------------------------------------*/

/* ================================================================================
 * IMPORTANT
 * --------------------------------------------------------------------------------
 * The concept here would be that every angular component will belong to a parent
 * module i.e. a battery status grid component for instance would be part of the 
 * "battery" module in the "modules" folder
 * 
 * By doing this, we do not need to specify the component explicitly in the 
 * route entry (preventing us from importing it here - which would mean pulling it
 * down pre-maturely). Instead, we will predominantly use the "loadChildren" property
 * to "lazy load" all required component dependencies on the route "just in time"
 * or on demand
 * 
 * (Assumption):
 * -------------
 * Each module dependency would be responsible for figuring
 * out what the user can see based on their permissions and role and what routes
 * get loaded
 * ============================================================================= */

import { Injectable } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Enumerations } from '../util/enum';

/*this class will load our modules for us. it should probably use some sort of 
 "permissions service" as dependency in it's parametarized constructor */
export class ModuleLoader {

    private modules_path: string = 'app/modules';

    //this permissions object would come from sessionStorage via zebra SAML login
    private user_permissions: any = {
        features: {
            battery: {
                smart_battery: true,
                battery_stats: true
            },
            device: false,
            memory: false,
            util: true
            //..more
        }
    };

    constructor() {
    }

    private loadTopLevelModules() {
        let results: Array<Object> = Array<Object>();

        /* Default/Top-level routes */
        results.push({ path: 'login', loadChildren: this.modules_path + '/login/login.module' });
        results.push({ path: '', loadChildren: this.modules_path + '/dashboard/dashboard.module' });

        //...opinionated implementation...
        if (this.user_permissions) {
            //traverse user permissions (from login) and build routes + sub routes
            for (let key in this.user_permissions) {
                switch (key) {
                    case Enumerations.Modules.Battery:
                        if (this.user_permissions.features.battery) {
                            results.push({ path: 'battery', loadChildren: this.modules_path + '/battery/battery.module' });
                        }
                        break;

                    case Enumerations.Modules.Device:
                        if (this.user_permissions.features.device) {
                            results.push({ path: 'device', loadChildren: this.modules_path + '/device/device.module' });
                        }
                        break;

                    case Enumerations.Modules.Memory:
                        if (this.user_permissions.features.memory) {
                            results.push({ path: 'memory', loadChildren: this.modules_path + '/memory/memory.module' });
                        }
                        break;

                    case Enumerations.Modules.Util:
                        if (this.user_permissions.features.util) {
                            results.push({ path: 'util', loadChildren: this.modules_path + '/util/util.module' });
                        }
                        break;
                }
            }
        }
        return results;
    }

    private loadModule(module_type?: string){
        let app_routes: Routes;

        switch(module_type){
            case Enumerations.Modules.Battery:
                //here, you can use the user permissions to evaluate which modules get loaded and returned
                if(this.user_permissions.battery.smart_battery){
                    app_routes.push({ path: 'battery/smart', loadChildren: this.modules_path + '/battery/smart.module' });
                }

                if(this.user_permissions.battery.battery_stats){
                    app_routes.push({ path: 'battery/stats', loadChildren: this.modules_path + '/battery/stats.module' });
                }
                break;
        }

        return app_routes;
    }

    public loadModules(submodule_type?: string) {
        //generate routes based on feature
        let app_routes: Routes;

        if(submodule_type && submodule_type != ''){
            app_routes = this.loadModule(submodule_type);
        }
        else{
            app_routes = this.loadTopLevelModules();
        }
        return app_routes;
    }
}
