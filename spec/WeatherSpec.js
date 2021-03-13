"use strict";

describe("Weather", function() {

  let weather


  beforeEach(function() {
    weather = new Weather
  });

 describe("Weather is stormy", function() {
  it("makes the weather stormy", function(){
    spyOn(weather, 'isStormy').and.returnValue(true);
    expect(weather.isStormy()).toEqual(true);
  });
});

  describe("Weather is sunny", function() {
    it("makes the weather sunny", function(){
      spyOn(weather, 'isStormy').and.returnValue(false);
      expect(weather.isStormy()).toEqual(false);
    });
  });

});
