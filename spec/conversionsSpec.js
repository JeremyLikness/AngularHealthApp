/**
 * Created by jlikness on 9/27/2014.
 */
describe("Conversions", function() {

    var conversions;

    beforeEach(function() {
        conversions = new Conversions();
    });

    describe("Given 12 inches", function () {

        describe("When inches to centimeters is called", function () {

            it("should return 30.48 centimeters", function () {
                var actual = conversions.inchesToCentimeters(12);
                expect(actual).toBeCloseTo(30.48);
            });

        });

        describe("When inches to feet is called", function () {
            it("should return 1 foot", function () {
                var actual = conversions.inchesToFeet(12);
                expect(actual).toBeCloseTo(1);
            });
        });

    });

    describe("Given 50 centimeters when centimeters to inches is called", function () {
        it("should return about 19.685 inches", function () {
            var actual = conversions.centimetersToInches(50);
            expect(actual).toBeCloseTo(19.685);
        })
    });

    describe("Given 130 pounds when pounds to kilograms is called", function () {
        it("should return about 58.957 kilograms", function () {
            var actual = conversions.poundsToKilograms(130);
            expect(actual).toBeCloseTo(58.957);
        })
    });

    describe("Given 60 kilograms when kilograms to pounds is called", function () {
        it("should return about 132.3 pounds", function () {
            var actual = conversions.kilogramsToPounds(60);
            expect(actual).toBeCloseTo(132.3);
        })
    });
});
