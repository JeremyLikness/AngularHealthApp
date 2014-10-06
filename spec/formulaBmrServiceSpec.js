describe("BMR Formula service", function() {
    var formulaBmrSvc;

    beforeEach(function() {
        module('healthApp');
    });

    beforeEach(inject(function (formulaBmrService) {
        formulaBmrSvc = formulaBmrService;
    }));

    it("should be defined", function() {
        expect(formulaBmrSvc).not.toBeNull();
    });

    it("should be a function", function () {
        var fnPrototype = {},
            isFn = formulaBmrSvc && fnPrototype.toString.call(formulaBmrSvc) === '[object Function]';
        expect(isFn).toBe(true);
    })
});
