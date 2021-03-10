"use strict"

class Airport{

  constructor(){
    this.hangar_report = [];
  };

  land = function(plane) {

    if(this.hangar_report.length > 10) {
      return 'Cannot land, airport is currently full.';
    }

    else if(this.hangar_report.length <= 10); {
      this.hangar_report.push(plane);
      return this.hangar_report;
    }

  };

  take_off = function(plane){
    this.hangar_report.pop(plane);
  };

};
