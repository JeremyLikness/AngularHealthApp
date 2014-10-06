describe("Gender filter", function() {
    var genderFilter;

    beforeEach(function() {
        module('healthApp');
    });

    beforeEach(inject(function ($filter) {
        genderFilter = $filter('gender');
    }));

    it("should be defined", function() {
        expect(genderFilter).not.toBeNull();
    });

    describe("Given null value", function () {
        it("when filter called then it should return female", function () {
            var actual = genderFilter(null);
            expect(actual).toBe('Female');
        });
    });


    describe("with male set", function () {
        it("when filter called then it should return Male", function () {
            var actual = genderFilter(true);
            expect(actual).toBe('Male');
        });
    });

    describe("with male not set", function () {
        it("when filter called then it should return Female", function () {
            var actual = genderFilter(false);
            expect(actual).toBe('Female');
        });
    });

});
