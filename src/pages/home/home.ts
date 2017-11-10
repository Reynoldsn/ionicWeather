import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import * as _ from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentWeather: any;
  forecast: any;

  constructor(public http: Http) {
  }

  getWeather(zipcode) {
    console.log(zipcode);
    let zipQuery = 'http://api.apixu.com/v1/forecast.json?key=8ca3550e6ec5459d8ac224045170711&q=' + zipcode + '&days=5';

    this.http.get(zipQuery)
      .map(res => res.json())
      .subscribe((results) => {
        _.each(results.forecast.forecastday, (p) => {
          console.log(p);


          this.forecast = [p.day.avghumidity];
        })
        this.currentWeather = results.current;
      })
  }

}
