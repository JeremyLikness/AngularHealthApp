describe("Formula for BMI", function() {

    describe("Given a 5 ft 10 person who weighs 300 pounds", function () {

        it("should compute a BMI of 43", function () {
            var actual = formulaBmi({
                height: 70,
                weight: 300
            });
            expect(actual).toBeCloseTo(43);
        });

    });

    describe("Given a 5 ft 8 in person who weighs 120 pounds", function () {

        it("should compute a BMI of 18.2", function () {
            var actual = formulaBmi({
                height: 68,
                weight: 120
            });
            expect(actual).toBeCloseTo(18.2);
        });

    });
});
