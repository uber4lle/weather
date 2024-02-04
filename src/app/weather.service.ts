import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherDataInterface } from './main/weather-data.interface';
import { ForecastDataInterface } from './forecast/forecast-data.interface';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class WeatherService {
  private readonly API_BASE_URL = 'http://api.openweathermap.org/data/2.5/';
  private readonly APP_ID = '5a4b2d457ecbef9eb2a71e480b947604'
  
  constructor(private readonly http: HttpClient) { }
  
  getWeatherData(zipcode: string) {
    const url = `${this.API_BASE_URL}weather?zip=${zipcode}&appid=${this.APP_ID}&units=imperial`;
    return this.http.get<WeatherDataInterface>(url);
  }

  getForecastData(zipcode: string): Observable<ForecastDataInterface> {
    return this.http.get<ForecastDataInterface>(`${this.API_BASE_URL}forecast/daily?zip=${zipcode}&appid=${this.APP_ID}&cnt=5&units=imperial`)
  }
}