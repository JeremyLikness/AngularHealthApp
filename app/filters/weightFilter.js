(function (app) {

    app.filter('weight', function () {
        return function (input) {
            var check = !!input;
            return check ? 'lbs.' : 'kgs.';
        };
    });

})(angular.module('healthApp'));