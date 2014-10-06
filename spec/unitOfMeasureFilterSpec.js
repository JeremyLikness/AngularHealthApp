describe("Unit of measure filter", function() {
    var uomFilter;

    beforeEach(function() {
        module('healthApp');
    });

    beforeEach(inject(function ($filter) {
        uomFilter = $filter('uom');
    }));

    it("should be defined", function() {
        expect(uomFilter).not.toBeNull();
    });

    describe("Given null property", function () {
        it("when filter called then it should return Metric", function () {
            var actual = uomFilter(null);
            expect(actual).toBe('Metric');
        });
    });

    describe("Given uom service", function () {

        describe("with U.S. set", function () {
            it("when filter called then it should return U.S.", function () {
                var actual = uomFilter(true);
                expect(actual).toBe('U.S.');
            });
        });

        describe("with U.S. not set", function () {
            it("when filter called then it should return Metric", function () {
                var actual = uomFilter(false);
                expect(actual).toBe('Metric');
            });
        });
    });

});
