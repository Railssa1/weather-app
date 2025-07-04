import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from 'src/app/models/interface/weather';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  cityName = 'São Paulo';
  weatherData!: WeatherData;
  searchIcon = faMagnifyingGlass;

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
      this.getWeatherData(this.cityName);
  }

  getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(this.weatherData);
      },
      error: (err) => console.log(err)
    })
  }

  onSubmit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
