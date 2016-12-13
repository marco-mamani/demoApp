'use strict';

eventsApp.factory('$exceptionHandler', function () {
    return function (exception) {
        console.log("exception handler: " + exception.message);
    };
});
