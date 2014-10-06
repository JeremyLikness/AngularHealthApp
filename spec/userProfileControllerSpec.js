describe("User profile controller", function() {
    var userProfileController, uomSvc, userProfileSvc;

    beforeEach(function() {
        module('healthApp');
    });

    beforeEach(inject(function ($controller, uomService, userProfileService) {
        userProfileController = $controller('userProfileCtrl');
        uomSvc = uomService;
        userProfileSvc = userProfileService;
    }));

    it("should be defined", function() {
        expect(userProfileController).not.toBeNull();
    });

    it("should contain a reference to the user profile service", function () {
        expect(userProfileController.userProfileService).not.toBeNull();
    });

    it("should contain a reference to the unit of measure service", function () {
        expect(userProfileController.uomService).not.toBeNull();
    });

    it("should contain a reference to the conversion service", function () {
        expect(userProfileController.conversionService).not.toBeNull();
    });

    describe("Given controller when height is 60 inches and unit of measure is U.S.", function () {
        beforeEach(function () {
            uomSvc.usMeasure = true;
        });

        it("then should expose 24 inches (2 feet) for minimum height range", function () {
            expect(userProfileController.minHeightRange).toBe(24);
        });
        it("then should expose 84 inches (7 feet) for maximum height range", function () {
            expect(userProfileController.maxHeightRange).toBe(84);
        });
        it("then should expose 60 inches for height value", function () {
            expect(userProfileController.heightValue).toBe(60);
        });
    });

    describe("Given controller when height is 60 inches and unit of measure is Metric", function () {
        beforeEach(function () {
            uomSvc.metricMeasure = true;
        });

        it("then should expose 60 centimeters for minimum height range", function () {
            expect(userProfileController.minHeightRange).toBe(60);
        });
        it("then should expose 215 centimeters for maximum height range", function () {
            expect(userProfileController.maxHeightRange).toBe(215);
        });
        it("then should expose about 152.4 centimeters for height value", function () {
            expect(userProfileController.heightValue).toBeCloseTo(152.4);
        });
    });

});
