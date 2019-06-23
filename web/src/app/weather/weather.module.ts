import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperatureComponent } from './temperature/temperature.component';
import {RouterModule} from "@angular/router";
import {DisplayModule} from "../display/display.module";
import { WeatherComponent } from './weather/weather.component';

const routes = [
    {
        path     : 'temperature/:id',
        component: TemperatureComponent,
    },
];


@NgModule({
  declarations: [TemperatureComponent, WeatherComponent],
  imports: [
    CommonModule,
    DisplayModule,
    RouterModule.forChild(routes),
  ]
})
export class WeatherModule { }
