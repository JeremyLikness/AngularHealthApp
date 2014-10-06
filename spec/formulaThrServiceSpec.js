describe("THR Formula service", function() {
    var formulaThrSvc;

    beforeEach(function() {
        module('healthApp');
    });

    beforeEach(inject(function (formulaThrService) {
        formulaThrSvc = formulaThrService;
    }));

    it("should be defined", function() {
        expect(formulaThrSvc).not.toBeNull();
    });

    it("should be a function", function () {
        var fnPrototype = {},
            isFn = formulaThrSvc && fnPrototype.toString.call(formulaThrSvc) === '[object Function]';
        expect(isFn).toBe(true);
    })
});
