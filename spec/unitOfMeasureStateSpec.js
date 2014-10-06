describe("Unit of measure state", function() {
  var uomState;

  beforeEach(function() {
    uomState = new UnitOfMeasureState();
  });

  it("Should default to U.S.", function() {
    expect(uomState.usMeasure).toEqual(true);
    expect(uomState.metricMeasure).toEqual(false);
  });

  describe("Given default state when toggle is called", function() {
      it("then it should flip the values", function () {
          uomState.toggle();
          expect(uomState.usMeasure).toEqual(false);
          expect(uomState.metricMeasure).toEqual(true);
      })
    });

   describe("Given default state when metric measure is set", function () {
       it("then it should reset the U.S. measure", function () {
           uomState.metricMeasure = true;
           expect(uomState.usMeasure).toEqual(false);
           expect(uomState.metricMeasure).toEqual(true);
       })
   });

    describe("Given the default state", function () {
       it("when measure is set to truthsy value then it should be true", function () {
           uomState.metricMeasure = "true";
           expect(uomState.metricMeasure).toBe(true);
       });
        it("when measure is set to falsy value then it should be false", function () {
            uomState.metricMeasure = 0;
            expect(uomState.metricMeasure).toBe(false);
        });
    });
});
