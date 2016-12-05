'use strict';

usersApp.controller('UserController',
    function UserController($scope, userData) {
        $scope.users = userData.getUsers()
            .$promise
            .then(function (users) {$scope.users = users; })
            .catch(function (response) {console.log(response);}
        );
    }
)
