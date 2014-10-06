describe("Height filter", function() {
    var heightFilter, uomSvc;

    beforeEach(function() {
        module('healthApp');
    });

    beforeEach(inject(function (uomService, $filter) {
        uomSvc = uomService;
        heightFilter = $filter('height');
    }));

    it("should be defined", function() {
        expect(heightFilter).not.toBeNull();
    });

    describe("Given height in inches of 70", function () {
        describe("and U.S. measurement", function () {
            it("when filter called then it should return 5 ft. 10 in.", function () {
                var actual;
                uomSvc.usMeasure = true;
                actual = heightFilter(70);
                expect(actual).toBe('5 ft. 10 in.');
            });
        });
        describe("and Metric measurement", function () {
            it("when filter called then it should return 178 cm.", function () {
                var actual;
                uomSvc.usMeasure = false;
                actual = heightFilter(70);
                expect(actual).toBe('178 cm.');
            });
            describe("and no conversion specified", function () {
               it("when filter called then it should return 70 cm.", function () {
                   var actual;
                   uomSvc.usMeasure = false;
                   actual = heightFilter(70, false);
                   expect(actual).toBe('70 cm.');
;               });
            });
        });
    });
 });
