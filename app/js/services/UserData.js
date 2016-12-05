'use strict';
usersApp.factory('userData', function ($resource) {
    var resource = $resource('/data/user/:id', {id:'@id'});
    return {
        getUsers: function () {
            return resource.get({id:1});
            // $resource(URL, defaulValue)
        },
        save: function (user) {
            user.id = 999;
            return resource.save(user);
        }
    }
});
