describe("Formula for BMR", function() {

    describe("Given a 40-year old 5 ft 10 in male who weighs 200 pounds", function () {

        it("should compute a BMR of 1929", function () {
            var actual = formulaBmr({
                isMale: true,
                height: 70,
                weight: 200,
                age: 40
            });
            expect(actual).toEqual(1929);
        });

    });

    describe("Given a 35-year old 5 ft 8 in female who weighs 120 pounds", function () {

        it("should compute a BMR of 1332", function () {
            var actual = formulaBmr({
                isMale: false,
                height: 68,
                weight: 120,
                age: 35
            });
            expect(actual).toEqual(1332);
        });

    });
});
