import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
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
  lat: number;
  long: number;
  isLoading: boolean;
  searching: boolean = false;
  feelsLike: any;
  maxTemp: any;
  minTemp: any;
  wind: any;
  windDirect: any;
  percip: any;

  constructor(public http: Http, public geolocation: Geolocation) {
  }

  ngOnInit() {
    this.getWeatherInCurrentLocation();
  }

  getWeatherInCurrentLocation() {
    this.isLoading = true;
    this.geolocation.getCurrentPosition()
    .then(p => {

      this.lat = p.coords.latitude;
      this.long = p.coords.longitude;

      let locationQuery = 'http://api.apixu.com/v1/forecast.json?key=8ca3550e6ec5459d8ac224045170711&q=' + this.lat + ',' + this.long + '&days=5';

      this.http.get(locationQuery)
        .map(res => res.json())
        .subscribe((results) => {
          console.log('this is results', results)
          this.feelsLike = results.current.feelslike_f;
          this.percip = results.current.precip_in;
          this.wind = results.current.wind_mph;
          this.windDirect = results.current.wind_dir;
          this.location = results.location.name + ', ' + results.location.region;
          _.each(results.forecast, (p) => {
            this.forecast = p;
            console.log(p[0].day);
            this.minTemp = p[0].day.mintemp_f
            this.maxTemp = p[0].day.maxtemp_f
          })
          this.currentWeather = results.current.temp_f;
          this.currentWeather = results.current.temp_f;
          this.isLoading = false;
        })

    });
  }

  getWeather(zipcode) {
    this.isLoading = true;
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
        this.currentWeather = results.current.temp_f;
        this.isLoading = false;

        this.toggleSearch();
      })
  }

  toggleSearch() {
    this.searching = !this.searching;
  }

}
