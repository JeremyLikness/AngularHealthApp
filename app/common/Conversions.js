var Conversions = (function () {

    var conversions = {
        centimetersPerInch: 2.54,
        inchesPerFoot: 12,
        poundsPerKilogram: 2.205
    };

    function Constructor() {

    };

    Constructor.prototype.inchesToCentimeters = function (inches) {
        var input = Number(inches);
        return input * conversions.centimetersPerInch;
    };

    Constructor.prototype.inchesToFeet = function (inches) {
        var input = Number(inches);
        return input / conversions.inchesPerFoot;
    };

    Constructor.prototype.centimetersToInches = function (centimeters) {
        var input = Number(centimeters);
        return input / conversions.centimetersPerInch;
    };

    Constructor.prototype.poundsToKilograms = function (pounds) {
        var input = Number(pounds);
        return input / conversions.poundsPerKilogram;
    };

    Constructor.prototype.kilogramsToPounds = function (kg) {
        var input = Number(kg);
        return input * conversions.poundsPerKilogram;
    };

    return Constructor;

})();