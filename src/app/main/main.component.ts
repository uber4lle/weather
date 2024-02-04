import { Component, Inject } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  locations: string[] = [];
  constructor(private readonly weatherService: WeatherService) { }

  addLocation(zipcode: string) {

  }
}
