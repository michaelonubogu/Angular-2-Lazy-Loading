/* ------------------------------------------------------------------------
 * Name: Widget-Block widget
 * Description: Place holder for where widgets will be rendered within 
 * a widgets container page area. It will accept information from passed in 
 * and dynamically create a component widget
 * ----------------------------------------------------------------------*/
import { Component, ViewContainerRef, ViewChild, ReflectiveInjector, ComponentFactoryResolver } from '@angular/core'; 

@Component({
  selector: 'widget-block',
  inputs: ['widget_name', 'widget_width', 'widget_height', 'widget_resize']
})

export class WidgetBlockComponent {
  private widget_name: String;
  private widget_width: Number;
  private widget_height: Number;

  constructor() {
  }

}

