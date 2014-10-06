(function (app) {

    app.directive('toggleBlock', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                label : '@',
                buttonText: '=',
                toggleFunction: '&'
            },
            templateUrl: 'content/templates/toggleBlock.html',
            link: function (scope, element) {

            }
        }
    });

})(angular.module('healthApp'));