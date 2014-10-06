describe("Conversion service", function() {
    var conversionSvc;

    beforeEach(function() {
        module('healthApp');
    });

    beforeEach(inject(function (conversionService) {
        conversionSvc = conversionService;
    }));

    it("should be defined", function() {
        expect(conversionSvc).not.toBeNull();
    });

    it("should have a conversion function", function () {
        expect(conversionSvc.inchesToCentimeters).toBeDefined();
    })
});
