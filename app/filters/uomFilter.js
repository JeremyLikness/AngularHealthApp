(function (app) {

    app.filter('uom', function () {
        return function (input) {
            var check = !!input;
            return check ? 'U.S.' : 'Metric';
        };
    });

})(angular.module('healthApp'));