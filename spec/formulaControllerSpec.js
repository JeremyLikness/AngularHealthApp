describe("Formula controller", function() {
    var formulaController, uomSvc, userProfileSvc;

    beforeEach(function() {
        module('healthApp');
    });

    beforeEach(inject(function ($controller, uomService, userProfileService) {
        formulaController = $controller('formulaCtrl');
        uomSvc = uomService;
        userProfileSvc = userProfileService;
    }));

    it("should be defined", function() {
        expect(formulaController).not.toBeNull();
    });

    it("should contain a reference to the unit of measure service", function () {
        expect(formulaController.uomService).not.toBeNull();
    });

    it("should contain a reference to the user profile service", function () {
        expect(formulaController.userProfileService).not.toBeNull();
    });

    describe("Given a 40-year old 5 ft 10 in male who weighs 200 pounds", function () {

        it("bmrValue should be 1929", function () {
            uomSvc.usMeasure = true;
            userProfileSvc.isMale = true;
            userProfileSvc.ageYears = 40;
            userProfileSvc.heightInches = 5*12 + 10;
            userProfileSvc.weightPounds = 200;
            expect(formulaController.bmrValue).toBeCloseTo(1929);
        });

    });

    describe("Given a 5 ft 8 in person who weighs 120 pounds", function () {

        it("bmiValue should be 18.2", function () {
            uomSvc.usMeasure = true;
            userProfileSvc.isMale = true;
            userProfileSvc.ageYears = 40;
            userProfileSvc.heightInches = 5*12 + 8;
            userProfileSvc.weightPounds = 120;
            expect(formulaController.bmiValue).toBeCloseTo(18.2);
        });

    });

    describe("Given a 40-year old", function () {

        it("thrValue should be min 90 and max 153", function () {
            uomSvc.usMeasure = true;
            userProfileSvc.isMale = true;
            userProfileSvc.ageYears = 40;
            userProfileSvc.heightInches = 5*12 + 8;
            userProfileSvc.weightPounds = 120;
            expect(formulaController.thrValue.min).toBeCloseTo(90);
            expect(formulaController.thrValue.max).toBeCloseTo(153);
        });

    });
});
