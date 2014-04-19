'use strict';

var _mainModules = [
    'Services'
    ,'Filters'
    ,'Directives'
    ,'ngRoute'
    ,'ngResource'
    ,'ngAnimate'
    ,'ngTouch'
    ,'Dashboard'
    ,'Search'
    // yo:ngMainModules
];


angular.module('CredentialsManager', _mainModules )
    .config( function($routeProvider){
        //redirect any invalid hash to /home
        $routeProvider.otherwise({
            redirectTo: '/dashboard'
        });

        var routes = [];

        routes.push({
            name: '/dashboard',
            params: {
                templateUrl: 'scripts/dashboard/views/dashboard.html',
                controller: 'DashboardCtrl'
            }
        });
        
        routes.push({
            name: '/search',
            params: {
                templateUrl: 'scripts/search/views/search.html',
                controller: 'SearchCtrl'
            }
        });
        
// yo:ngRoutes

        routes.forEach(function(route){
            $routeProvider.when(route.name, route.params);
        });
    });