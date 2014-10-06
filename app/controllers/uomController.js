(function (app) {

    function Controller (uomService) {
        this.uomService = uomService;
    }

    app.controller('uomCtrl', ['uomService', Controller]);

})(angular.module('healthApp'));