import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent {
   private apiKey = '04620b871e7f679629f8c7707d051cc6';

  constructor(
    private http: HttpClient
  ) { }

  getWeatherData(cityName: string): Observable<any> {
    return this.http.get(`https://api.openweatgermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`);
  }
}
