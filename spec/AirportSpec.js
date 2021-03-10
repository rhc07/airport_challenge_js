"use strict";

describe("Airport", function() {

  let airport
  let plane

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('lands a plane', function() {
    airport.land(plane)
    expect(airport.hangar_report).toContain(plane);
  });

  it('plane takes off from the airport', function() {
    airport.land(plane)
    airport.take_off(plane)
    expect(airport.hangar_report).not.toContain(plane);
  });

  it('plane cannot land when hangar report is full', function() {
    for (let i = 0; i <= 10; i++) {
      airport.land(plane);
    }
    expect(airport.land(plane)).toEqual('Cannot land, airport is currently full.');
  });


});
