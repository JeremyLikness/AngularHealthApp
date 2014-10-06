describe("Weight filter", function() {
    var weightFilter;

    beforeEach(function() {
        module('healthApp');
    });

    beforeEach(inject(function ($filter) {
        weightFilter = $filter('weight');
    }));

    it("should be defined", function() {
        expect(weightFilter).not.toBeNull();
    });

    describe("Given U.S. measurement when filter called", function () {
        it("should return lbs.", function () {
            var actual;
            actual = weightFilter(true);
            expect(actual).toBe('lbs.');
        });
    });

    describe("Given metric measurement when filter called", function () {
        it("should return kgs.", function () {
            var actual;
            actual = weightFilter(false);
            expect(actual).toBe('kgs.');
        });
    });
});
