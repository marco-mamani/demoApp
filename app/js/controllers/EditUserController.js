'use strict';

usersApp.controller('EditUserController',
    function EditUserController($scope, userData, gravatarUrlBuilderUser) {
        $scope.saveUser = function (user, newUserForm) {
            // console.log(newEventForm);
            if (newUserForm.$valid) {
                userData.save(user)
                    .$promise.then(
                    function (response) { console.log('success', response)},
                    function (response) { console.log('failure', response)}
                );
            }
        };

        $scope.cancelEdit = function () {
            window.location = "/EventDetails.htm";
        }

        $scope.getGravatarUrl = function(email) {
            return gravatarUrlBuilderUser.buildGravatarUrlUser(email);
        }
    }
);
