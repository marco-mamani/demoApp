'use strict';
usersApp.factory('usersData', function ($resource) {
    var resource = $resource('/data/users/:id', {id:'@id'});
    return {
        getUsers: function () {
            return resource.get({id:1});
            // $resource(URL, defaulValue)
        },
        save: function (user) {
            user.id = 998;
            return resource.save(user);
        }
    }
});
