describe("User profile service", function() {
    var userProfileSvc;

    beforeEach(function() {
        module('healthApp');
    });

    beforeEach(inject(function (userProfileService) {
        userProfileSvc = userProfileService;
    }));

    it("should be defined", function() {
        expect(userProfileSvc).not.toBeNull();
    });

    it("should have isMale property", function () {
        expect(userProfileSvc.isMale).toBeDefined();
    });
});
