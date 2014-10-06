describe("Formula for Target Heart Rate", function() {

    describe("Given a 40-year old", function () {

        it("should compute a THR of 90 to 153", function () {
            var actual = formulaThr(40);
            expect(actual.min).toBeCloseTo(90);
            expect(actual.max).toBeCloseTo(153);
        });

    });

});
