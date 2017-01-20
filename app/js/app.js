'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl: 'templates/NewEvent.htm',
                controller: 'EditEventController'
            })
    });
var usersApp = angular.module('usersApp', ['ngResource']);
