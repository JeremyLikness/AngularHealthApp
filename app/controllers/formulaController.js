(function (app) {

    function Controller(formulaBmrService, formulaBmiService, formulaThrService, uomService, userProfileService) {
        this.formulaBmrService = formulaBmrService;
        this.formulaBmiService = formulaBmiService;
        this.formulaThrService = formulaThrService;
        this.uomService = uomService;
        this.userProfileService = userProfileService;
    }

    Object.defineProperty(Controller.prototype, "bmrValue", {
        enumerable: true,
        configurable: false,
        get: function () {
            var profile = {
                isMale: this.userProfileService.isMale,
                height: this.userProfileService.heightInches,
                weight: this.userProfileService.weightPounds,
                age: this.userProfileService.ageYears
            };
            return this.formulaBmrService(profile);
        }
    });

    Object.defineProperty(Controller.prototype, "bmiValue", {
        enumerable: true,
        configurable: false,
        get: function () {
            var profile = {
                height: this.userProfileService.heightInches,
                weight: this.userProfileService.weightPounds
            };
            return this.formulaBmiService(profile);
        }
    });

    Object.defineProperty(Controller.prototype, "thrValue", {
        enumerable: true,
        configurable: false,
        get: function () {
            return this.formulaThrService(this.userProfileService.ageYears);
        }
    });

    app.controller('formulaCtrl', ['formulaBmrService', 'formulaBmiService', 'formulaThrService', 'uomService',
        'userProfileService', Controller]);

})(angular.module('healthApp'));