import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherHomeComponent } from './modules/weather/pages/weather-home/weather-home.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  },
  {
    path: 'weather',
    component: WeatherHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  private apiKey = '04620b871e7f679629f8c7707d051cc6';

  constructor(
    private http: HttpClient
  ){}

  getWeatherData(cityName: string): Observable<any>{
    return this.http.get(`https://api.openweatgermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`);
  }
}
