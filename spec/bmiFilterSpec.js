describe("BMI filter", function() {
    var bmiFilter;

    beforeEach(function() {
        module('healthApp');
    });

    beforeEach(inject(function ($filter) {
        bmiFilter = $filter('bmi');
    }));

    it("should be defined", function() {
        expect(bmiFilter).not.toBeNull();
    });

    describe("Given BMI is less than 18.5", function () {
        it("should return Underweight", function () {
            var actual;
            actual = bmiFilter(18.4);
            expect(actual).toBe('Underweight');
        });
    });

    describe("Given BMI is greater than or equal to 18.5 and less than 25", function () {
        it("should return Normal", function () {
            var actual;
            actual = bmiFilter(18.6);
            expect(actual).toBe('Normal');
        });
    });

    describe("Given BMI is greater than or equal to 25 and less than 30", function () {
        it("should return Overweight", function () {
            var actual;
            actual = bmiFilter(26);
            expect(actual).toBe('Overweight');
        });
    });

    describe("Given BMI is greater than or equal to 30", function () {
        it("should return Obese", function () {
            var actual;
            actual = bmiFilter(31);
            expect(actual).toBe('Obese');
        });
    });

});
