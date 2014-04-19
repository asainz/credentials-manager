'use strict';

var _mainModules = [
    'Services'
    ,'Filters'
    ,'Directives'
    ,'ngRoute'
    ,'ngResource'
    ,'ngAnimate'
    ,'ngTouch'
    // yo:ngMainModules
];


angular.module('CredentialsManager', _mainModules )
    .config( function($routeProvider){
        //redirect any invalid hash to /home
        $routeProvider.otherwise({
            redirectTo: '/dashboard'
        });

        var routes = [];

// yo:ngRoutes

        routes.forEach(function(route){
            $routeProvider.when(route.name, route.params);
        });
    });