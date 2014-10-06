(function (app) {

    app.filter('height', ['uomService', 'conversionService', function (uomSvc, conversionSvc) {
        return function (input, convert) {
            var heightInches = Number(input), heightCentimeters, m, ft, result = '';
            if (uomSvc.usMeasure) {
                ft = Math.floor(conversionSvc.inchesToFeet(heightInches));
                if (ft > 0) {
                    result = ft + " ft. ";
                }
                heightInches -= ft * 12;
                if (heightInches >= 1) {
                    result += (Math.floor(heightInches) + ' in.');
                }
            }
            else {
                if (convert !== undefined && !!convert === convert && !convert) {
                    heightCentimeters = heightInches;
                }
                else {
                    heightCentimeters = Math.round(conversionSvc.inchesToCentimeters(heightInches), 1);
                }
                result = heightCentimeters + ' cm.';
            }
            return result;
        };
    }]);

})(angular.module('healthApp'));