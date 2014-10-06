(function (app) {

    function Controller (userProfileService, uomService, conversionService) {
        this.userProfileService = userProfileService;
        this.uomService = uomService;
        this.conversionService = conversionService;
    }

    app.controller('userProfileCtrl', ['userProfileService', 'uomService', 'conversionService', Controller]);

})(angular.module('healthApp'));