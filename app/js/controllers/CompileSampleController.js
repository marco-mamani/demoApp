'use strict';

eventsApp.controller('CompileSampleController',
    function CompileSampleController($scope, $compile) {

        $scope.appendDiv2Element = function (markup) {
            return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
        }
    }
);
