import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {

  constructor(public http: Http) {
  }

  getWeather() {
    this.http.get('http://api.openweathermap.org/data/2.5/forecast?id=5506956&APPID=73aa3d486c550756dfdb2ab4fd40a637')
      .map(res => res.json())
      .subscribe((results) => {

      })
  }

}
