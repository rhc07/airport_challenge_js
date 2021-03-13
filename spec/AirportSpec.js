"use strict";

describe("Airport", function() {

  let airport
  let plane
  let weather

  beforeEach(function() {
    airport = new Airport(weather);
    plane = new Plane();
    weather = new Weather();
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

  it('the capacity of the airport can be changed by the user', function() {
    airport = new Airport(20)
    expect(airport.capacity).toEqual(20);
  });

  fit('prevents take off when weather is stormy', function() {
    spyOn(weather, "isStormy").and.returnValue(true);
    expect(airport.take_off(plane)).toEqual('It is too stormy to take off.');
  });

});
