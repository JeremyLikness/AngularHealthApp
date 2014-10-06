(function (app) {

    app.filter('bmi', function () {
        return function (input) {
            var value = Number(input);

            if (value >= 30.0) {
                return 'Obese';
            }

            if (value >= 25.0) {
                return 'Overweight';
            }

            if (value < 18.5) {
                return 'Underweight';
            }

            return 'Normal';
        };
    });

})(angular.module('healthApp'));