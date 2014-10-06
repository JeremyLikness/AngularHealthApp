describe("BMI Formula service", function() {
    var formulaBmiSvc;

    beforeEach(function() {
        module('healthApp');
    });

    beforeEach(inject(function (formulaBmiService) {
        formulaBmiSvc = formulaBmiService;
    }));

    it("should be defined", function() {
        expect(formulaBmiSvc).not.toBeNull();
    });

    it("should be a function", function () {
        var fnPrototype = {},
            isFn = formulaBmiSvc && fnPrototype.toString.call(formulaBmiSvc) === '[object Function]';
        expect(isFn).toBe(true);
    })
});
