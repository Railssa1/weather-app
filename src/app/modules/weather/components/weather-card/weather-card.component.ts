import { Component, Input } from '@angular/core';
import { WeatherData } from 'src/app/models/interface/weather';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
  @Input() weatherData!: WeatherData;
}
