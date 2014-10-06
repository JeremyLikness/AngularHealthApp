var UserProfile = (function () {

    var isMale = true, isFemale = false;

    function Constructor() {
        this.heightInches = 60;
        this.weightPounds = 130;
        this.ageYears = 40;
    }

    Constructor.prototype.toggleGender = function () {
        this.isMale = !this.isMale;
    };

    Object.defineProperty(Constructor.prototype, "isMale", {
        enumerable: true,
        configurable: false,
        get: function() {
            return isMale;
        },
        set: function (val) {
            isMale = !!val;
            isFemale = !isMale;
        }
    });

    Object.defineProperty(Constructor.prototype, "isFemale", {
        enumerable: true,
        configurable: false,
        get: function() {
            return isFemale;
        },
        set: function (val) {
            isFemale = !!val;
            isMale = !isFemale;
        }
    });

    return Constructor;

})();