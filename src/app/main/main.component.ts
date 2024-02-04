import { Component, OnInit, Signal, inject } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherDataInterface } from './weather-data.interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { lastValueFrom } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  locations: { zipcode: string, weatherData: WeatherDataInterface }[] = [];
  constructor(private readonly weatherService: WeatherService) {}
  ngOnInit(): void {
    this.getLocationsFromLocalStorage();
  }

  addLocation(zipcode: string): void {
    console.log("add Location", zipcode);
    if (!this.locations.some(location => location.zipcode === zipcode)) {
      lastValueFrom(this.weatherService.getWeatherData(zipcode)).then(weatherData => {
        console.log("weatherData", weatherData);
        this.locations.push({ zipcode, weatherData });
        this.setLocationsInLocalStorage();
      });
      
      
    }
  }

  

  removeLocation(zipcode: string): void {
    this.locations = this.locations.filter(location => location.zipcode !== zipcode);
    this.setLocationsInLocalStorage();
  }

  private setLocationsInLocalStorage(): void {
    localStorage.setItem('locations', JSON.stringify(this.locations));
  }

  private getLocationsFromLocalStorage(): void {
    this.locations = JSON.parse(localStorage.getItem('locations') || '[]');
  }
}
