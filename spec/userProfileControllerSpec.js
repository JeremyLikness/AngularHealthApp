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

});
