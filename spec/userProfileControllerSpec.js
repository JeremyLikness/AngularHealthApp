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

    describe("Given controller when weight is 130 pounds and unit of measure is U.S.", function () {
        beforeEach(function () {
            uomSvc.usMeasure = true;
        });
        it("then should expose 20 pounds for minimum weight range", function () {
            expect(userProfileController.minWeightRange).toBe(20);
        });
        it("then should expose 400 pounds for maximum weight range", function () {
            expect(userProfileController.maxWeightRange).toBe(400);
        });
        it("then should expose 130 pounds for weight value", function () {
            expect(userProfileController.weightValue).toBeCloseTo(130);
        });
    });

    describe("Given controller when weight is 130 pounds and unit of measure is kilograms", function () {
        beforeEach(function () {
            uomSvc.metricMeasure = true;
        });
        it("then should expose 9 kilograms for minimum weight range", function () {
            expect(userProfileController.minWeightRange).toBe(9);
        });
        it("then should expose 182 kilograms for maximum weight range", function () {
            expect(userProfileController.maxWeightRange).toBe(182);
        });
        it("then should expose 58.957 kilograms for weight value", function () {
            expect(userProfileController.weightValue).toBeCloseTo(58.957);
        });
    });

    describe("Given controller when weight is set to valid range of 20 - 400 pounds", function () {
        it("then should update on the user profile", function () {
            uomSvc.usMeasure = true;
            userProfileSvc.weightPounds = 130;
            userProfileController.weightValue = 100;
            expect(userProfileSvc.weightPounds).toBeCloseTo(100);
        });
    });

    describe("Given controller when weight is set to invalid value or range outside of 20 - 400 pounds", function () {
        it("then should not update on the user profile", function () {
            uomSvc.usMeasure = true;
            userProfileSvc.weightPounds = 130;
            userProfileController.weightValue = 0;
            expect(userProfileSvc.weightPounds).toBeCloseTo(130);
            userProfileController.weightValue = "invalid";
            expect(userProfileSvc.weightPounds).toBeCloseTo(130);
        });
    });

    describe("Given controller when age is set to valid range of 13 - 120 years", function () {
        it("then should update on the user profile", function () {
            userProfileSvc.ageYears = 40;
            userProfileController.ageValue = 100;
            expect(userProfileSvc.ageYears).toBeCloseTo(100);
        });
    });

    describe("Given controller when age is set to invalid value or range outside of 13 - 120 years", function () {
        it("then should not update on the user profile", function () {
            userProfileSvc.age = 40;
            userProfileController.ageValue = 0;
            expect(userProfileSvc.age).toBeCloseTo(40);
            userProfileController.ageValue = "invalid";
            expect(userProfileSvc.age).toBeCloseTo(40);
        });
    });

});
