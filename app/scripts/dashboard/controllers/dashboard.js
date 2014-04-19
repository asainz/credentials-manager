'use strict';

angular.module('Dashboard').controller('DashboardCtrl', function ($scope, $location) {
    $scope.navigate = function(dest){
        $location.path(dest);
    };
});