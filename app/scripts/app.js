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
    ,'Static'
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
            name: '/static',
            params: {
                templateUrl: 'scripts/static/views/static.html',
                controller: 'StaticCtrl'
            }
        });
        
// yo:ngRoutes

        routes.forEach(function(route){
            $routeProvider.when(route.name, route.params);
        });
    });