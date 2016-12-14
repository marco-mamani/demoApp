'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngCookies'])
    .factory('myCache', function ($cacheFactory) {
        return $cacheFactory('myCache', {capacity:3});
    });
var usersApp = angular.module('usersApp', ['ngResource']);
