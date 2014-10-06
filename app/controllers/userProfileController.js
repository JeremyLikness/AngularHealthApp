(function (app) {

    var weightVal, wasMetric, ageValue;

    function Controller (userProfileService, uomService, conversionService) {
        this.userProfileService = userProfileService;
        this.uomService = uomService;
        this.conversionService = conversionService;
        weightVal = uomService.usMeasure ? userProfileService.weightPounds :
            conversionService.poundsToKilograms(userProfileService.weightPounds);
        wasMetric = uomService.metricMeasure;
        ageValue = userProfileService.ageYears;
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

    Object.defineProperty(Controller.prototype, "minWeightRange", {
        enumerable: true,
        configurable: false,
        get: function() {
            return this.uomService.metricMeasure ? 9 : 20;
        }
    });

    Object.defineProperty(Controller.prototype, "maxWeightRange", {
        enumerable: true,
        configurable: false,
        get: function() {
            return this.uomService.metricMeasure ? 182: 400;
        }
    });

    Object.defineProperty(Controller.prototype, "weightValue", {
        enumerable: true,
        configurable: false,
        get: function () {
            // one-time adjustment if this changed
            if (this.uomService.metricMeasure !== wasMetric) {
                wasMetric = this.uomService.metricMeasure;
                if (wasMetric) {
                    weightVal = Math.round(this.conversionService.poundsToKilograms(Number(weightVal)),2);
                }
                else {
                    weightVal = Math.round(this.conversionService.kilogramsToPounds(Number(weightVal)),2);
                }
            }
            return weightVal;
        },
        set: function (val) {
            var incoming = Number(val), adjustedWeight = incoming;
            weightVal = val;
            if (this.uomService.metricMeasure) {
                adjustedWeight = this.conversionService.kilogramsToPounds(Number(weightVal));
            }
            if (adjustedWeight >= 20 && adjustedWeight <= 400) {
                this.userProfileService.weightPounds = adjustedWeight;
            }
        }
    });

    Object.defineProperty(Controller.prototype, "ageValue", {
        enumerable: true,
        configurable: false,
        get: function () {
            return ageValue;
        },
        set: function (val) {
            var incoming = Number(val);
            ageValue = val;
            if (incoming >= 13 && incoming <= 120) {
                this.userProfileService.ageYears = incoming;
            }
        }
    });

    app.controller('userProfileCtrl', ['userProfileService', 'uomService', 'conversionService', Controller]);

})(angular.module('healthApp'));