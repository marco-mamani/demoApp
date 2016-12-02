'use strict';

usersApp.controller('UserController',
    function UserController($scope, userData) {
        $scope.user = userData.getUsers()
            .$promise
            .then(function (user) {$scope.user = user; })
            .catch(function (response) {console.log(response);}
        );
    }
)
