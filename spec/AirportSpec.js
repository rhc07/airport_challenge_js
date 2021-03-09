"use strict";

describe("Airport", function() {

  let airport

  beforeEach(function() {
    airport = new Airport();
  });

  it('lands a plane', function() {
    expect(airport.land()).toEqual('plane');
  });
});
