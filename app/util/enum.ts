/* ----------------------------------------------------------------
 * name:        Enumerations
 * description: Enumerations list of whatever
 * created by:  Michael Onubogu
 * --------------------------------------------------------------*/

/*this class will build our routes array for us. it should probably use some sort of 
 "permissions service" as dependency in it's parametarized constructor */
export class Enumerations {

    //Modules (Angular specific) are categorization of functionality within the app
    public static Modules: any = {
        Authentication: "authentication",
        Battery: "battery",
        Device: "device",
        Landing: "landing",
        Memory: "memory",
        Util: "util",
        Location: "location"
    }

    public static SubModules: any = {
        BatteryStats: "battery_stats",
        SmartBattery: "smart_battery"
    }

    //Features are the list of products we provide in the app
    public static Features: any = {
        Battery: "battery",
        Device: "device",
        Memory: "memory",
        Util: "util"
    }
}
