import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '501d61384a9d5a2f492a5f643a0f78ce';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<WeatherData> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', this.apiKey)
      .set('units', 'metric');

    return this.http.get<WeatherData>(this.apiUrl, { params });
  }


  
}
