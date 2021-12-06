import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { createCustomElement } from '@angular/elements';
import { CountryPopulationComponent } from './country-population/country-population.component';
import { DxChartModule } from 'devextreme-angular';
import { EnergyConsumptionComponent } from './energy-consumption/energy-consumption.component';
import { FormsModule } from '@angular/forms';
import { Dashboard2Component } from './dashboard2/dashboard2.component';


@NgModule({
  declarations: [
    DashboardComponent, CountryPopulationComponent, EnergyConsumptionComponent, Dashboard2Component
  ],
  imports: [
    BrowserModule,
    DxChartModule,
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [ DashboardComponent, Dashboard2Component]
})
export class AppModule {
  constructor(private injector: Injector) {

  
    const dashboard = createCustomElement(DashboardComponent, { injector: this.injector });
   
    customElements.define('app-dashboard1', dashboard);

    const dashboard2 = createCustomElement(Dashboard2Component, { injector: this.injector });
   
    customElements.define('app-dashboard2', dashboard2);
  }
  ngDoBootstrap() {
   
  }

}
