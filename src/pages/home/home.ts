import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentWeather: any;
  forecast: any;
  location: any;


  constructor(public http: Http) {

  }

  getWeather(zipcode) {
    console.log(zipcode);
    let zipQuery = 'http://api.apixu.com/v1/forecast.json?key=8ca3550e6ec5459d8ac224045170711&q=' + zipcode + '&days=5';

    this.http.get(zipQuery)
      .map(res => res.json())
      .subscribe((results) => {
        console.log('results', results);
       this.location = results.location.name + ', ' + results.location.region;
        _.each(results.forecast, (p) => {
           console.log(p);
           this.forecast = p;
        })
        this.currentWeather = results.current.feelslike_f;
      })
  }

}
