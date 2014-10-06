(function (app) {

    function Controller (userProfileService, uomService, conversionService) {
        this.userProfileService = userProfileService;
        this.uomService = uomService;
        this.conversionService = conversionService;
    }

    Object.defineProperty(Controller.prototype, "minHeightRange", {
        enumerable: true,
        configurable: false,
        get: function() {
            return this.uomService.usMeasure ? 24 : 60;
        }
    });

    Object.defineProperty(Controller.prototype, "maxHeightRange", {
        enumerable: true,
        configurable: false,
        get: function() {
            return this.uomService.usMeasure ? 84 : 215;
        }
    });

    Object.defineProperty(Controller.prototype, "heightValue", {
        enumerable: true,
        configurable: false,
        get: function () {
            return this.uomService.usMeasure ? this.userProfileService.heightInches :
                this.conversionService.inchesToCentimeters(this.userProfileService.heightInches);
        },
        set: function (val) {
            var incoming = Number(val);
            this.userProfileService.heightInches = this.uomService.usMeasure ? incoming :
                this.conversionService.centimetersToInches(incoming);
        }
    });

    app.controller('userProfileCtrl', ['userProfileService', 'uomService', 'conversionService', Controller]);

})(angular.module('healthApp'));