"use strict";

class Airport{

  constructor(default_capacity = 10, weather = new Weather) {
    this.hangar_report = [];
    this.capacity = default_capacity;
    this.weather = weather;

  }

  land = function(plane) {

    if(this.hangar_report.length > this.capacity) {
      return 'Cannot land, airport is currently full.';
    }

    else if(this.hangar_report.length <= this.capacity) {
      this.hangar_report.push(plane);
      return this.hangar_report;
    }

  };

  take_off = function(plane){

    if(this.weather.isStormy === true){
      return 'It is too stormy to take off.';
    }
    else {
      this.hangar_report.pop(plane);
    }
  };


};
