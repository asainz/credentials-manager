'use strict';

angular.module('Search').controller('SearchCtrl', function ($scope) {
    $scope.items = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];

    $scope.removeItem = function(item){
        item.removed = true;
    };
});