describe("Unit of measure controller", function() {
    var uomController;

    beforeEach(function() {
        module('healthApp');
    });

    beforeEach(inject(function ($controller) {
        uomController = $controller('uomCtrl');
    }));

    it("should be defined", function() {
        expect(uomController).not.toBeNull();
    });

    it("should contain a reference to the unit of measure service", function () {
        expect(uomController.uomService).not.toBeNull();
    });
});
