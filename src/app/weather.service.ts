import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class WeatherService {
  private readonly API_BASE_URL = 'http://api.openweathermap.org/data/2.5/';
  private readonly APP_ID = '5a4b2d457ecbef9eb2a71e480b947604'
  
  constructor(private readonly http: HttpClient) { }
  
  getWeather(zipcode: string) {
    const url = `${this.API_BASE_URL}weather?zip=${zipcode}&appid=${this.APP_ID}&units=imperial`;
    return this.http.get(url);
  }

  getForecast(zipcode: string) {
    this.http.get(`${this.API_BASE_URL}forecast?zip=${zipcode}&appid=${this.APP_ID}&units=imperial`)
  }
}