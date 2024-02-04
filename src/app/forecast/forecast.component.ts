import { Component, inject, input } from '@angular/core';
import { WeatherService } from '../weather.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ForecastDataInterface } from './forecast-data.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css'
})
export class ForecastComponent {
  forecastData$!: Observable<ForecastDataInterface>;
  private readonly zipcode = input.required<string>();
  private readonly weatherService = inject(WeatherService);

  ngOnInit(): void {
    this.forecastData$ = this.weatherService.getForecastData(this.zipcode());

  }
}
