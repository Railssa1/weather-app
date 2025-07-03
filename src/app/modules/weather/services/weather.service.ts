import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = '04620b871e7f679629f8c7707d051cc6';

  constructor(
    private http: HttpClient
  ) { }

  getWeatherData(cityName: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&mode=json&units=metric&appid=${this.apiKey}`);
  }
}
