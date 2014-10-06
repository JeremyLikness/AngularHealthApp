(function (app) {

    app.filter('gender', function () {
        return function (input) {
            var check = !!input;
            return check ? 'Male' : 'Female';
        };
    });

})(angular.module('healthApp'));