describe("Unit of measure service", function() {
    var uomSvc;

    beforeEach(function() {
        module('healthApp');
    });

    beforeEach(inject(function (uomService) {
        uomSvc = uomService;
    }));

    it("should be defined", function() {
        expect(uomSvc).not.toBeNull();
    });

    it("should default to U.S.", function () {
        expect(uomSvc.usMeasure).toBe(true);
        expect(uomSvc.metricMeasure).toBe(false);
    })
});
