describe("User profile", function() {
    var userPRofile;

    beforeEach(function() {
        userProfile = new UserProfile();
    });

    it("Should default to male", function() {
        expect(userProfile.isMale).toEqual(true);
        expect(userProfile.isFemale).toEqual(false);
    });

    describe("Given default state", function () {

        beforeEach(function () {
            userProfile = new UserProfile();
        });

        it("when toggleGender is called then it should flip the values", function () {
            userProfile.toggleGender();
            expect(userProfile.isMale).toEqual(false);
            expect(userProfile.isFemale).toEqual(true);
        });

        it("when female is setthen it should reset male", function () {
            userProfile.isFemale = true;
            expect(userProfile.isMale).toEqual(false);
            expect(userProfile.isFemale).toEqual(true);
        });


        it("when male is set to truthsy value then it should be true", function () {
            userProfile.isMale = "true";
            expect(userProfile.isMale).toBe(true);
        });

        it("when male is set to falsy value then it should be false", function () {
            userProfile.isMale = 0;
            expect(userProfile.isMale).toBe(false);
        });

        it("should default to 60 inches height", function () {
            expect(userProfile.heightInches).toBe(60);
        });

        it("should default to 130 pounds weight", function () {
            expect(userProfile.weightPounds).toBe(130);
        });

        it("should default to 40 years age", function () {
            expect(userProfile.ageYears).toBe(40);
        });
    });
});
